# opensearch-build-badger
Create badges for OpenSearch components, generates a markdown friendly UX over repositories using img.shields.io to create the tiles.

Special thanks to @amitkumardube, his blog walked through the process over on [medium](https://medium.com/worldwide-writing-network/github-actions-write-your-first-action-using-typescript-c5e2783faaae).

How does its output look? It looks like this:

## Release Readiness
Repo | Triage | 1.3 | 2.4 | 3.0
-----|-----|-----|-----|-------
OpenSearch | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch/untriaged)](https://github.com/opensearch-project/OpenSearch/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch/v1.3.0)](https://github.com/opensearch-project/OpenSearch/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/OpenSearch/v1.3.0)](https://github.com/opensearch-project/OpenSearch/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch/v2.4.0)](https://github.com/opensearch-project/OpenSearch/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/OpenSearch/v2.4.0)](https://github.com/opensearch-project/OpenSearch/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch/v3.0.0)](https://github.com/opensearch-project/OpenSearch/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/OpenSearch/v3.0.0)](https://github.com/opensearch-project/OpenSearch/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
OpenSearch-Dashboards | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch-Dashboards/untriaged)](https://github.com/opensearch-project/OpenSearch-Dashboards/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch-Dashboards/v1.3.0)](https://github.com/opensearch-project/OpenSearch-Dashboards/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/OpenSearch-Dashboards/v1.3.0)](https://github.com/opensearch-project/OpenSearch-Dashboards/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch-Dashboards/v2.4.0)](https://github.com/opensearch-project/OpenSearch-Dashboards/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/OpenSearch-Dashboards/v2.4.0)](https://github.com/opensearch-project/OpenSearch-Dashboards/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/OpenSearch-Dashboards/v3.0.0)](https://github.com/opensearch-project/OpenSearch-Dashboards/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/OpenSearch-Dashboards/v3.0.0)](https://github.com/opensearch-project/OpenSearch-Dashboards/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
alerting | [![](https://img.shields.io/github/issues/opensearch-project/alerting/untriaged)](https://github.com/opensearch-project/alerting/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/alerting/v1.3.0)](https://github.com/opensearch-project/alerting/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/alerting/v1.3.0)](https://github.com/opensearch-project/alerting/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/alerting/v2.4.0)](https://github.com/opensearch-project/alerting/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/alerting/v2.4.0)](https://github.com/opensearch-project/alerting/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/alerting/v3.0.0)](https://github.com/opensearch-project/alerting/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/alerting/v3.0.0)](https://github.com/opensearch-project/alerting/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
anomaly-detection | [![](https://img.shields.io/github/issues/opensearch-project/anomaly-detection/untriaged)](https://github.com/opensearch-project/anomaly-detection/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/anomaly-detection/v1.3.0)](https://github.com/opensearch-project/anomaly-detection/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/anomaly-detection/v1.3.0)](https://github.com/opensearch-project/anomaly-detection/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/anomaly-detection/v2.4.0)](https://github.com/opensearch-project/anomaly-detection/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/anomaly-detection/v2.4.0)](https://github.com/opensearch-project/anomaly-detection/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/anomaly-detection/v3.0.0)](https://github.com/opensearch-project/anomaly-detection/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/anomaly-detection/v3.0.0)](https://github.com/opensearch-project/anomaly-detection/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
asynchronous-search | [![](https://img.shields.io/github/issues/opensearch-project/asynchronous-search/untriaged)](https://github.com/opensearch-project/asynchronous-search/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/asynchronous-search/v1.3.0)](https://github.com/opensearch-project/asynchronous-search/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/asynchronous-search/v1.3.0)](https://github.com/opensearch-project/asynchronous-search/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/asynchronous-search/v2.4.0)](https://github.com/opensearch-project/asynchronous-search/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/asynchronous-search/v2.4.0)](https://github.com/opensearch-project/asynchronous-search/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/asynchronous-search/v3.0.0)](https://github.com/opensearch-project/asynchronous-search/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/asynchronous-search/v3.0.0)](https://github.com/opensearch-project/asynchronous-search/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
common-utils | [![](https://img.shields.io/github/issues/opensearch-project/common-utils/untriaged)](https://github.com/opensearch-project/common-utils/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/common-utils/v1.3.0)](https://github.com/opensearch-project/common-utils/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/common-utils/v1.3.0)](https://github.com/opensearch-project/common-utils/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/common-utils/v2.4.0)](https://github.com/opensearch-project/common-utils/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/common-utils/v2.4.0)](https://github.com/opensearch-project/common-utils/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/common-utils/v3.0.0)](https://github.com/opensearch-project/common-utils/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/common-utils/v3.0.0)](https://github.com/opensearch-project/common-utils/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
cross-cluster-replication | [![](https://img.shields.io/github/issues/opensearch-project/cross-cluster-replication/untriaged)](https://github.com/opensearch-project/cross-cluster-replication/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/cross-cluster-replication/v1.3.0)](https://github.com/opensearch-project/cross-cluster-replication/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/cross-cluster-replication/v1.3.0)](https://github.com/opensearch-project/cross-cluster-replication/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/cross-cluster-replication/v2.4.0)](https://github.com/opensearch-project/cross-cluster-replication/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/cross-cluster-replication/v2.4.0)](https://github.com/opensearch-project/cross-cluster-replication/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/cross-cluster-replication/v3.0.0)](https://github.com/opensearch-project/cross-cluster-replication/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/cross-cluster-replication/v3.0.0)](https://github.com/opensearch-project/cross-cluster-replication/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
dashboards-reports | [![](https://img.shields.io/github/issues/opensearch-project/dashboards-reports/untriaged)](https://github.com/opensearch-project/dashboards-reports/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/dashboards-reports/v1.3.0)](https://github.com/opensearch-project/dashboards-reports/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/dashboards-reports/v1.3.0)](https://github.com/opensearch-project/dashboards-reports/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/dashboards-reports/v2.4.0)](https://github.com/opensearch-project/dashboards-reports/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/dashboards-reports/v2.4.0)](https://github.com/opensearch-project/dashboards-reports/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/dashboards-reports/v3.0.0)](https://github.com/opensearch-project/dashboards-reports/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/dashboards-reports/v3.0.0)](https://github.com/opensearch-project/dashboards-reports/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
geospatial | [![](https://img.shields.io/github/issues/opensearch-project/geospatial/untriaged)](https://github.com/opensearch-project/geospatial/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/geospatial/v1.3.0)](https://github.com/opensearch-project/geospatial/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/geospatial/v1.3.0)](https://github.com/opensearch-project/geospatial/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/geospatial/v2.4.0)](https://github.com/opensearch-project/geospatial/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/geospatial/v2.4.0)](https://github.com/opensearch-project/geospatial/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/geospatial/v3.0.0)](https://github.com/opensearch-project/geospatial/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/geospatial/v3.0.0)](https://github.com/opensearch-project/geospatial/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
index-management | [![](https://img.shields.io/github/issues/opensearch-project/index-management/untriaged)](https://github.com/opensearch-project/index-management/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/index-management/v1.3.0)](https://github.com/opensearch-project/index-management/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/index-management/v1.3.0)](https://github.com/opensearch-project/index-management/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/index-management/v2.4.0)](https://github.com/opensearch-project/index-management/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/index-management/v2.4.0)](https://github.com/opensearch-project/index-management/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/index-management/v3.0.0)](https://github.com/opensearch-project/index-management/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/index-management/v3.0.0)](https://github.com/opensearch-project/index-management/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
job-scheduler | [![](https://img.shields.io/github/issues/opensearch-project/job-scheduler/untriaged)](https://github.com/opensearch-project/job-scheduler/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/job-scheduler/v1.3.0)](https://github.com/opensearch-project/job-scheduler/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/job-scheduler/v1.3.0)](https://github.com/opensearch-project/job-scheduler/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/job-scheduler/v2.4.0)](https://github.com/opensearch-project/job-scheduler/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/job-scheduler/v2.4.0)](https://github.com/opensearch-project/job-scheduler/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/job-scheduler/v3.0.0)](https://github.com/opensearch-project/job-scheduler/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/job-scheduler/v3.0.0)](https://github.com/opensearch-project/job-scheduler/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
k-NN | [![](https://img.shields.io/github/issues/opensearch-project/k-NN/untriaged)](https://github.com/opensearch-project/k-NN/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/k-NN/v1.3.0)](https://github.com/opensearch-project/k-NN/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/k-NN/v1.3.0)](https://github.com/opensearch-project/k-NN/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/k-NN/v2.4.0)](https://github.com/opensearch-project/k-NN/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/k-NN/v2.4.0)](https://github.com/opensearch-project/k-NN/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/k-NN/v3.0.0)](https://github.com/opensearch-project/k-NN/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/k-NN/v3.0.0)](https://github.com/opensearch-project/k-NN/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
ml-commons | [![](https://img.shields.io/github/issues/opensearch-project/ml-commons/untriaged)](https://github.com/opensearch-project/ml-commons/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/ml-commons/v1.3.0)](https://github.com/opensearch-project/ml-commons/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/ml-commons/v1.3.0)](https://github.com/opensearch-project/ml-commons/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/ml-commons/v2.4.0)](https://github.com/opensearch-project/ml-commons/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/ml-commons/v2.4.0)](https://github.com/opensearch-project/ml-commons/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/ml-commons/v3.0.0)](https://github.com/opensearch-project/ml-commons/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/ml-commons/v3.0.0)](https://github.com/opensearch-project/ml-commons/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
notifications | [![](https://img.shields.io/github/issues/opensearch-project/notifications/untriaged)](https://github.com/opensearch-project/notifications/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/notifications/v1.3.0)](https://github.com/opensearch-project/notifications/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/notifications/v1.3.0)](https://github.com/opensearch-project/notifications/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/notifications/v2.4.0)](https://github.com/opensearch-project/notifications/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/notifications/v2.4.0)](https://github.com/opensearch-project/notifications/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/notifications/v3.0.0)](https://github.com/opensearch-project/notifications/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/notifications/v3.0.0)](https://github.com/opensearch-project/notifications/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
observability | [![](https://img.shields.io/github/issues/opensearch-project/observability/untriaged)](https://github.com/opensearch-project/observability/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/observability/v1.3.0)](https://github.com/opensearch-project/observability/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/observability/v1.3.0)](https://github.com/opensearch-project/observability/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/observability/v2.4.0)](https://github.com/opensearch-project/observability/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/observability/v2.4.0)](https://github.com/opensearch-project/observability/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/observability/v3.0.0)](https://github.com/opensearch-project/observability/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/observability/v3.0.0)](https://github.com/opensearch-project/observability/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
performance-analyzer | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer/untriaged)](https://github.com/opensearch-project/performance-analyzer/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer/v1.3.0)](https://github.com/opensearch-project/performance-analyzer/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/performance-analyzer/v1.3.0)](https://github.com/opensearch-project/performance-analyzer/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer/v2.4.0)](https://github.com/opensearch-project/performance-analyzer/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/performance-analyzer/v2.4.0)](https://github.com/opensearch-project/performance-analyzer/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer/v3.0.0)](https://github.com/opensearch-project/performance-analyzer/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/performance-analyzer/v3.0.0)](https://github.com/opensearch-project/performance-analyzer/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
performance-analyzer-rca | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer-rca/untriaged)](https://github.com/opensearch-project/performance-analyzer-rca/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer-rca/v1.3.0)](https://github.com/opensearch-project/performance-analyzer-rca/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/performance-analyzer-rca/v1.3.0)](https://github.com/opensearch-project/performance-analyzer-rca/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer-rca/v2.4.0)](https://github.com/opensearch-project/performance-analyzer-rca/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/performance-analyzer-rca/v2.4.0)](https://github.com/opensearch-project/performance-analyzer-rca/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/performance-analyzer-rca/v3.0.0)](https://github.com/opensearch-project/performance-analyzer-rca/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/performance-analyzer-rca/v3.0.0)](https://github.com/opensearch-project/performance-analyzer-rca/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
security | [![](https://img.shields.io/github/issues/opensearch-project/security/untriaged)](https://github.com/opensearch-project/security/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/security/v1.3.0)](https://github.com/opensearch-project/security/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/security/v1.3.0)](https://github.com/opensearch-project/security/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/security/v2.4.0)](https://github.com/opensearch-project/security/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/security/v2.4.0)](https://github.com/opensearch-project/security/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/security/v3.0.0)](https://github.com/opensearch-project/security/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/security/v3.0.0)](https://github.com/opensearch-project/security/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
sql | [![](https://img.shields.io/github/issues/opensearch-project/sql/untriaged)](https://github.com/opensearch-project/sql/issues?q=is%3Aissue+is%3Aopen+label%3Auntriaged) | [![](https://img.shields.io/github/issues/opensearch-project/sql/v1.3.0)](https://github.com/opensearch-project/sql/issues?q=is%3Aissue+is%3Aopen+label%3Av1.3.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/sql/v1.3.0)](https://github.com/opensearch-project/sql/issues?q=is%3Aissue+is%3Aclosed+label%3Av1.3.0) | [![](https://img.shields.io/github/issues/opensearch-project/sql/v2.4.0)](https://github.com/opensearch-project/sql/issues?q=is%3Aissue+is%3Aopen+label%3Av2.4.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/sql/v2.4.0)](https://github.com/opensearch-project/sql/issues?q=is%3Aissue+is%3Aclosed+label%3Av2.4.0) | [![](https://img.shields.io/github/issues/opensearch-project/sql/v3.0.0)](https://github.com/opensearch-project/sql/issues?q=is%3Aissue+is%3Aopen+label%3Av3.0.0) [![](https://img.shields.io/github/issues-closed/opensearch-project/sql/v3.0.0)](https://github.com/opensearch-project/sql/issues?q=is%3Aissue+is%3Aclosed+label%3Av3.0.0)
