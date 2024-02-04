const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller;
const path = require('path');

getInstallerConfig()
.then(createWindowsInstaller)
.catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});

function getInstallerConfig () {
  console.log('creating windows installer');
  const rootPath = path.join('./');
  const outPath = path.join(rootPath, 'build');

  return Promise.resolve({
    appDirectory: path.join(outPath, 'muyu/'),
    authors: 'Qinxiaofeng',
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    exe: 'muyu.exe',
    setupExe: 'MuyuInstaller.exe',
    setupIcon: path.join(rootPath, 'icons', 'app.png')
  });
}