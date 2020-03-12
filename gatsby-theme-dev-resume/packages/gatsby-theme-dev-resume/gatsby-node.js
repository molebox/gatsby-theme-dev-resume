const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, "resume/"),
  ];

  const files = [
    'resume/resume.json',
  ]

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });

  files.forEach(async f => {
    if (!fs.existsSync(path.join(program.directory, f))) {
      reporter.info(`Copying resume file: ${f.split('/').pop()}`)
      await fs.copyFileSync(path.join(__dirname, f), path.join(program.directory, f))
    }
  })
};