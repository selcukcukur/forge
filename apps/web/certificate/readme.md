# Certificates

When working on local development with custom domains (like `*.selcukcukur.dev` and `selcukcukur.dev`), browsers normally
reject self‑signed certificates. [`mkcert`](https://github.com/FiloSottile/mkcert) solves this by creating
**trusted SSL certificates** that your system and browsers will accept.

- Generates valid HTTPS certificates for local domains.
- Automatically installs a local Certificate Authority (CA) trusted by your OS and browsers.
- No need to deal with complex OpenSSL commands or manual trust settings.

In our workflow, we rely on **custom hosts and local certificates** to simulate production‑like conditions.

- API routes often require HTTPS, even in local testing.
- Real‑time application behavior (such as WebSockets, SSE, or secure cookies) can only be tested properly over HTTPS.
- Using `*.selcukcukur.dev` and `selcukcukur.dev` domains locally ensures consistency with staging and production environments.
- Developers can catch issues early by working in an environment that mirrors real deployment conditions.

By combining mkcert with local custom domains, we make it easier to test APIs, authentication flows, and live
interactions without surprises when moving to production.

## Installation

For more detailed instructions and troubleshooting, see the official [mkcert repository](https://github.com/FiloSottile/mkcert)

### Linux

#### APT (Debian/Ubuntu)

Install mkcert with libnss3-tools

```bash
sudo apt install libnss3-tools
```

#### YUM (RHEL/CentOS/Fedora)

Install mkcert with nss-tools
```bash
sudo yum install nss-tools
```

#### Pacman (Arch Linux)

Install mkcert with nss
```bash
sudo pacman -S nss
```

#### Zypper (openSUSE)

Install mkcert with mozilla-nss-tools
```bash
sudo zypper install mozilla-nss-tools
```

#### Homebrew on Linux

Install mkcert using Homebrew
```bash
brew install mkcert
```

### macOS

#### Homebrew

Install mkcert and NSS (needed if you use Firefox)
```bash
brew install mkcert
brew install nss
```

#### MacPorts

Update ports and install mkcert and NSS (needed if you use Firefox)
```bash
sudo port selfupdate
sudo port install mkcert
sudo port install nss
```

### Windows

#### Chocolatey

Use Chocolatey to install mkcert quickly
```bash
choco install mkcert
```

#### Scoop

Add the extras bucket and install mkcert with Scoop
```bash
scoop bucket add extras
scoop install mkcert
```

## Generate

To create certificates for Obvia domains, run
```bash
mkcert "*.obvia.dev" "obvia.dev"
```

This command works the same way on **Linux**, **macOS**, and **Windows**

It will produce two files
- `_.selcukcukur.dev+1.pem` → the certificate
- `_.selcukcukur.dev+1-key.pem` → the private key

For clarity and consistency, rename these files
- `selcukcukur.pem` → certificate
- `selcukcukur-key.pem` → private key

Use these renamed files in your local development server configuration (e.g., Next.js, Node.js, or proxy) to enable
HTTPS with your custom domains

## Notes

- Configure your dev server to use `selcukcukur.pem` and `selcukcukur-key.pem` for HTTPS.
- Certificates are valid only locally; use a real CA (e.g., Let’s Encrypt) in production.
- Run `mkcert` again if you need certificates for more domains.
- The local CA is installed once and reused for all future certificates.