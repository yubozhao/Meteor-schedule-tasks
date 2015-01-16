Package.describe({
  summary: "Schedule tasks in Meteor with laterJS."
  name: "bozhao:later",
  git: "https://github.com/yubozhao/Meteor-schedule-tasks.git",
  version: "0.1.12"
});

Npm.depends({
  later: '1.1.6'
});

Package.on_use(function (api) {
  api.add_files('later-server.js', ['server']);
  api.add_files('later-client.js', ['server']);
  api.add_files('schedule_tasks.js', ['server', 'client']);

  api.export('later', ['server']);
  api.export('ScheduledTask', ['server', 'client']);
});
