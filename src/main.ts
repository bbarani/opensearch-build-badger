const core = require("@actions/core");

export async function run() {
    const versionParam: string = core.getInput("versions", {required: true});
    const versions = versionParam.split(",").map(str => str.trim());

    const repositories = [
        "OpenSearch",
        "alerting",
        "anomaly-detection",
        "asynchronous-search",
        "common-utils",
        "cross-cluster-replication",
        "dashboards-reports",
        "geospatial",
        "index-management",
        "job-scheduler",
        "k-NN",
        "ml-commons",
        "notifications",
        "observability",
        "performance-analyzer",
        "performance-analyzer-rca",
        "security",
        "sql",
        "OpenSearch-Dashboards",
        "index-management-dashboards-plugin",
        "dashboards-maps",
        "security-dashboards-plugin",
        "security-analytics-dashboards-plugin ",
        "alerting-dashboards-plugin",
        "opensearch-dashboards-functional-test ",
        "anomaly-detection-dashboards-plugin ",
        "dashboards-visualizations",
        "ml-commons-dashboards",
        "dashboards-notebooks "
    ];

    const untriagedPrefix = "![](https://img.shields.io/github/issues/opensearch-project";
    const makeUntriagedBadge = (repo: string) => `[${untriagedPrefix}/${repo}/untriaged)](https://github.com/opensearch-project/${repo}/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged)`;

    const openIssuePrefix = "![](https://img.shields.io/github/issues/opensearch-project";
    const closedIssuePrefix = "![](https://img.shields.io/github/issues-closed/opensearch-project";

    const makeOpenIssueBadge = (repo: string, twoDigitVer: string) => `[${openIssuePrefix}/${repo}/v${twoDigitVer}.0)](https://github.com/opensearch-project/${repo}/issues?q=is%3Aissue+is%3Aopen+label%3Av${twoDigitVer}.0)`;
    const makeClosedIssueBadge = (repo: string, twoDigitVer: string) => `[${closedIssuePrefix}/${repo}/v${twoDigitVer}.0)](https://github.com/opensearch-project/${repo}/issues?q=is%3Aissue+is%3Aclosed+label%3Av${twoDigitVer}.0)`;


    let lines: string[] = [];

    lines.push(`## Release Readiness
Repo | Triage | ${versions.join(" | ")}
-----|-----|-----|-----|-------`);

    repositories.forEach(repo => {
        let line = `${repo}`;
        line = `${line} | ${makeUntriagedBadge(repo)}`;
        versions.forEach(ver => {
            line = `${line} | ${makeOpenIssueBadge(repo, ver)} ${makeClosedIssueBadge(repo, ver)}`;
        });
        lines.push(line);
    });

    const result = lines.join("\r\n");

    console.log(result);

    return result;
  }
  
  run()
    .catch(error => core.setFailed("Workflow failed! " + error.message));
