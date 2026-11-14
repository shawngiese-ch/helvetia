// Set this to "owner/repository" when hosting on a custom domain.
const githubRepository = "";
const owner = location.hostname.endsWith(".github.io") ? location.hostname.slice(0, -10) : "";
const firstPath = location.pathname.split("/").filter(Boolean)[0] || "";
const repository = githubRepository || (owner ? owner + "/" + (firstPath && !firstPath.includes(".") ? firstPath : owner + ".github.io") : "");
if (/^[\w.-]+\/[\w.-]+$/.test(repository)) {
  document.querySelectorAll("[data-issues]").forEach(link => { link.href = "https://github.com/" + repository + "/issues/new"; });
  const help = document.getElementById("issue-help");
  if (help) help.hidden = true;
}
