import cv2


FACE_CLASSIFIER = cv2.CascadeClassifier(
    f"{cv2.data.haarcascades}haarcascade_frontalface_default.xml"
)


def find_face(img_path, padding_fraction=.55):
    img = cv2.imread(str(img_path))
    size = max(img.shape)
    if size > 1000:
        initial_resize = 1000 / size
        img = cv2.resize(img, None, fx=initial_resize, fy=initial_resize)
        size = 1000
    H, W, _ = img.shape

    bg = cv2.blur(img, (int(size), int(size)))
    bg = cv2.resize(bg, None, fx=1.5, fy=1.5)
    offset_H = int(.5/2*H)
    offset_W = int(.5/2*W)
    bg[offset_H:offset_H+H, offset_W:offset_W+W] = img

    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    face = FACE_CLASSIFIER.detectMultiScale(
        img_gray, scaleFactor=1.1, minNeighbors=5, minSize=(40, 40)
    )

    if len(face) == 0:
        print('failed -', img_path)
        return cv2.cvtColor(bg, cv2.COLOR_BGR2RGB), img

    for (x, y, _w, _h) in face[:1]:
        center_x = x + .5*_w
        center_y = y + .3*_h

        s = max(_w, _h)
        s = (1+2*padding_fraction)*s
        x = center_x - .5*s + offset_W
        y = center_y - .5*s + 1.25*offset_H
        x = max(x, 0)
        y = max(y, 0)
        x, y, s = map(int, [x, y, s])
        cropped = bg[y:y+s, x:x+s].copy()
        cv2.rectangle(bg, (x, y), (x + s, y + s), (0, 255, 0), 4)

    return cv2.cvtColor(bg, cv2.COLOR_BGR2RGB), cropped


import pathlib

files = sorted(pathlib.Path('/symposium-2023/client/src/app/website/assets/img/speakers').glob('*.*'))
files = list(filter(lambda x: ('jp' in x.suffix.lower()) | ('png' in x.suffix.lower()), files))

out_dir = pathlib.Path('/symposium-2023/client/src/app/website/assets/img/speakers/cropped')


for pp in files[:]:
    print('Processing', pp.name)
    _, cropped = find_face(str(pp))
    cv2.imwrite(str(out_dir / pp.name), cropped)

    
    import matplotlib.pyplot as plt
    _, ax = plt.subplots()
    ax.imshow(find_face(str(pp))[0])
    ax.set_title(pp.name)

