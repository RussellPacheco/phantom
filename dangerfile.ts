import { danger, markdown } from "danger";

const baseBranch = danger.github.pr.base.ref;

if (baseBranch === "production") {
  // when opening a PR against the production branch
  markdown(
    `<h3>Sick human, you have opened a pull request against <code>${baseBranch}</code>!</h3>Hop outta here before I destroy you with my alien frog lasers! 🐸&nbsp;&nbsp;💥<br></br><sub style="display:none">`
  );
} else if (baseBranch === "dev")
  // when opening a PR against the dev branch
  markdown(
    `<h3>Gee thanks for your pull request, ribbit!.</h3>Go fix yourself a pina colada while the checks pass and someone reviews your code. 🐸&nbsp;&nbsp;🍍<br></br><sub style="display:none">`
  );
