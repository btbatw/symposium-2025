# BTBA Symposium Event Site

## Local Development and Testing

Follow the steps below to set up a local development environment for the BTBA
Symposium event site.

### 1️⃣ Set Up a Conda Environment with Node.js v6 and Git

Since this project requires an outdated version of Node.js (v6), it is
recommended to use
[Miniconda](https://www.anaconda.com/docs/getting-started/miniconda/install) for
managing dependencies.

#### 🔹 For Apple Silicon Macs (M1/M2/M3/M4/X)

```bash
CONDA_SUBDIR=osx-64 conda create -n node6 nodejs=6 git
conda activate node6
```

#### 🔹 For Other Systems

```bash
# Omit `git` if it's already installed globally
conda create -n node6 -c conda-forge nodejs=6 git
conda activate node6
```

### 2️⃣ Clone the Repository and Install Angular

**NOTE: Run the following commands in the activated conda environment**

```bash
git clone https://github.com/btbatw/symposium-2025.git
cd symposium-2025/client
npm install
npm install -g @angular/cli@1.3.2
```

### 3️⃣ Start the Development Server

**NOTE: Run the following commands in the activated conda environment**

```bash
# From the symposium-2025/client directory
ng serve
```

The local development server will now be running, and you can access the site in
your browser.

---

## Updating the Color Scheme and Visual Elements

To modify the color scheme and design elements, refer to the following
resources:

- [This past
commit](https://github.com/btbatw/symposium-2024/commit/6e7cde2654031d7f5f9305c2b10cdfde3583147a)
for previous customization
- [Material Design
Colors](https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors)
for selecting appropriate color palettes

---

## Deployment via GitHub Actions

The site is integrated with GitHub Actions for automatic deployment. Follow
these steps to ensure smooth integration:

1. Verify that the `--base-href` setting in `.github/workflows/main.yml` is
 updated to reflect the correct year.
2. Ensure **GitHub Pages** is enabled in the repository settings and is set to
 serve content from the `gh-pages` branch.
3. Once GitHub Actions completes, the deployed site will be available at:

    ```txt
    https://btbatw.github.io/symposium-<20XX>/
    ```

    (_Replace `<20XX>` with the corresponding year from the repository name._)

4. **Important: This setup only needs to be done once!** The `gh-pages` branch
 should be added as a Git submodule of the main website. Refer to [this
 note](https://github.com/btbatw/www.btbatw.org?tab=readme-ov-file#add-static-symposium-site-as-git-submodule)
 for details.
5. To update the deployed symposium site, manually trigger the **"Update all
 submodules"** workflow from the [main
 repository](https://github.com/btbatw/www.btbatw.org/actions).
