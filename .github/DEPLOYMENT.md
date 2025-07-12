# GitHub Packages Deployment Guide

This repository is configured to automatically publish to GitHub Packages using GitHub Actions.

## 🚀 Automated Publishing

### Release Publishing (Recommended)
1. Create a new release on GitHub:
   - Go to your repository → Releases → Create a new release
   - Choose a tag version (e.g., `v1.0.0`, `v1.1.0`)
   - Add release notes
   - Click "Publish release"
2. The package will automatically publish to GitHub Packages

### Manual Publishing
Trigger manual publishing via GitHub Actions:
1. Go to Actions → "Publish to GitHub Packages"
2. Click "Run workflow"
3. Optionally specify:
   - **Version**: Override package.json version
   - **Tag**: Choose `latest`, `beta`, or `alpha`

## 📦 Package Information

**Package Name**: `@pavliha/aircast-mavlink`  
**Registry**: GitHub Packages (https://npm.pkg.github.com)

## 🔧 Setup Requirements

### Repository Setup
✅ **Package URLs configured** for repository: `https://github.com/pavliha/aircast-mavlink.git`

2. **Repository Permissions**: Ensure Actions have write access to packages:
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"

### For Users Installing the Package

#### 1. Create/Update `.npmrc`
Create a `.npmrc` file in your project root:
```
@pavliha:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

#### 2. Generate GitHub Token
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `read:packages` scope
3. Replace `YOUR_GITHUB_TOKEN` in `.npmrc` with the generated token

#### 3. Install the Package
```bash
npm install @pavliha/aircast-mavlink
```

## 📋 CI/CD Workflows

### CI Workflow (`ci.yml`)
**Triggers**: Push to main branches, Pull requests
**Actions**:
- Tests on Node.js 16, 18, 20, 22
- Linting and build verification
- CLI functionality testing
- Package export validation
- Generated types verification

### Publish Workflow (`publish.yml`)
**Triggers**: 
- New releases (automatic)
- Manual dispatch (manual)

**Actions**:
- Full test suite
- Production build
- Package name scoping for GitHub Packages
- Publication to GitHub Packages
- Installation verification

## 🔍 Usage Examples

### Basic Import
```typescript
import { MAVLinkParser, MAVLinkGenerator } from '@pavliha/aircast-mavlink';
```

### Generated Types
```typescript
import * as CommonTypes from '@pavliha/aircast-mavlink/types/common';
import * as ArduPilotMegaTypes from '@pavliha/aircast-mavlink/types/ardupilotmega';
```

### CLI Usage
```bash
npx @pavliha/aircast-mavlink generate -i common.xml -o ./types
npx @pavliha/aircast-mavlink list
```

## 🐛 Troubleshooting

### Publishing Issues
- **Token permissions**: Ensure `GITHUB_TOKEN` has `packages:write` permission
- **Package name**: Must include organization scope (`@username/package-name`)
- **Registry**: Must be set to GitHub Packages in `publishConfig`

### Installation Issues
- **Authentication**: Verify `.npmrc` file and GitHub token
- **Scope**: Ensure package name includes `@username/` prefix
- **Registry**: Confirm registry URL in `.npmrc`

### CI Failures
- **Node version**: Ensure compatibility with Node.js 16+
- **Dependencies**: Check for missing dependencies in `package.json`
- **Build**: Verify TypeScript compilation succeeds locally

## 📈 Package Statistics

The package includes:
- **Size**: ~963 kB compressed, ~5.0 MB unpacked
- **Files**: 170 files total
- **Features**: 
  - MAVLink type generation
  - Real-time parsing
  - Pre-generated types for 7 dialects
  - CLI tools
  - Web and Node.js support

## 🔄 Version Management

### Automatic Versioning
- Release publishing uses git tag as version
- Manual publishing can override version

### Version Strategy
- **Major** (`1.0.0`): Breaking changes
- **Minor** (`1.1.0`): New features, backward compatible  
- **Patch** (`1.0.1`): Bug fixes, backward compatible

### Tags
- **latest**: Stable releases
- **beta**: Pre-release features
- **alpha**: Development builds