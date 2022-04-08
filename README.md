# Web of Science Journals API JavaScript Client

This API provides journal-level metadata and metrics for all journals in the Journal Citation Reports™ covered in the Web of Science Core Collection, including the Journal Impact Factor™ and other new metrics. Integrate journal data into your internal systems or retrieve journal indicators for bibliometrics studies.

## Resources
This API follows the REST approach to disclose resources in URL format. Only the GET method is currently available to perform requests over HTTP.

The API is available on the [Clarivate Developer Portal](https://developer.clarivate.com/apis/wos-journal). The access requires registration on the Portal and approval from the Clarivate Sales/Product teams to entitle to the API.

## Credentials
All requests require authentication with an API Key authentication flow. For more details, check the [Guide](https://developer.clarivate.com/help/api-access#key_access).

## API Client Libraries
The current languages/frameworks are supported: [Python](https://github.com/clarivate/wosjournals-python-client) | [Java](https://github.com/clarivate/wosjournals-java-client) | [Javascript](https://github.com/clarivate/wosjournals-javascript-client)

## Content
You can learn more about content at [Journal Citation Reports™ Product page](https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/), or in the [documentation](http://jcr.help.clarivate.com/Content/home.htm).

## <a name=\"search\"></a> Search (query parameter `q=`)
This API supports free-text search for a journal name, abbreviation, ISSN code, publisher, and Web of Science™ category name (only `/categories` endpoint). You need to provide a complete and valid ISSN code pattern; otherwise, the API will not look up for ISSN codes.

### Boolean operators
| Operator    | Description  | Example|
|-----|-----|------------------|
| + / \" \" | Search by two or more terms in the same field. Blank space is the same as an AND operator. The search retrieves all the records that contain the terms, e.g., | `/journals?q=matrix biology`<br> `/journals?q=nature+group` |
| OR | Search by at least one term in the field. The search retrieves all the records that contain one of the terms, e.g., | `/journals?q=gas OR oil` |
| NOT / - | Search by excluding specific terms. The search retrieves all the records that match the query specifics, e.g., | `/journals?q=genetics -nature` |

### Special symbols
The wildcards ( __*__ ) are allowed in the search that starts with the search query&#58; `/journals?q=nano*` will search indications that start from __nano__&#58; for example, _Nanotechnology_ or _nanotubes_.

Please note&#58; the free text search query (with the parameter `q=`) should contain at least three symbols.

## Filtering
The API supports several filters for Journals and Web of Science™ Categories, narrowing down the initial list of entities or search results.

There are two types of filters:

- Filter by one or multiple **values**: *edition*, *categoryCode*, *jcrYear*, *jifQuartile*
- Filter by **range**: *jif*, *jifPercentile*, *jci*, 

### Filter by values
The filter name goes before the equals sign, followed by one or multiple filter values, separated by a semicolon, like `categoryCode=RZ;RU`. You can combine various filters with or without the search. Filters are separated by an ampersand (**&amp;**): `q=nature&categoryCode=RU;KM&jcrYear=2018`

Please note&#58; filter by *jcrYear* allows only one year value as an input

### <a name='range'></a> Filter by range
The API supports range filtering for Journal Impact Factor (*jif*) or Journal Impact Factor Percentile (*jifPercentile*) with the following operators:

- ***eq*** (equal): if a Journal Impact Factor (Percentile) is equal to a specific number.<br /> For example: for `jif=eq:5.032` the result will include journals with Journal Impact Factor = 5.032.<br /> Not combinable with any other operator
- ***gt*** (greater than): if a Journal Impact Factor (Percentile) is greater than a specific number.<br /> For example: for `jif=gt:5` the result will include journals with Journal Impact Factor = 5.001 and higher.<br /> Combinable with *lt* and *lte* operators
- ***gte*** (greater than equal): if a Journal Impact Factor (Percentile) is greater than or equal to a specific number.<br /> For example: for `jif=gte:5` the result will include journals with Journal Impact Factor = 5.000 and higher.<br /> Combinable with *lt* and *lte* operators
- ***lt*** (less than): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lt:5` the result will include journals with Journal Impact Factor = 4.999 and less.<br /> Combinable with *gt* and *gte* operators
- ***lte*** (less than equal): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lte:5` the result will include journals with Journal Impact Factor = 5.000 and less.<br /> Combinable with *gt* and *gte* operators

Use `AND` to combine two operators, e.g.,`jifPercentile=gte:50 AND lte:80` responses with all journals in a percentile range from 50% to 80% (both included).

## Pagination
To ensure fast response time, each search or multiple entity calls (such as `/journals` or `/categories/ID/cited/year/YYYY`) retrieve only a certain number of hits/records.

There are two optional request parameters to browse along with the result&#58; _limit_ and _page_.

- limit&#58; Number of returned results, ranging from 0 to 50 (default **10**)
- page&#58; Specifying a page to retrieve (default **1**)

Moreover, this information is shown in the response body, in the tag **metadata**&#58;

```json
\"metadata\": {
  \"total\": 91,
  \"page\": 1,
  \"limit\": 10
}
```
## Errors
The WoS Journals API uses conventional HTTP success or failure status codes. For errors, some extra information is included to indicate what went wrong in the JSON response. The list of HTTP codes is listed below.

| Code  | Title  | Description |
|---|---|---|
| 400  | Bad request  | Request syntax error |
| 401  | Unauthorized  | The API key is invalid or missed |
| 404  | Not found  | The resource is not found |
| 405 | Method not allowed | Method other than GET is not allowed |
| 50X  | Server errors  | Technical error with servers|
Each error response (except `401 Unauthorized` error) contains the code of the error, the title of the error and detailed description of the error: a misprint in an endpoint, wrong URL parameter, etc. The example of the error message is shown below:

```json
\"error\": {
  \"status\": 404,
  \"title\": \"Resource couldn't be found\",
  \"details\": \"There is no information in WoS Journals API about the identifier ABC_DEF for the Journals content area. Sorry :(\"
}
```
For the `401 Unauthorized` error the response body is a little bit different:
```json
{
  \"error_description\": \"The access token is missing\",
  \"error\": \"invalid_request\"
}
```
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install clarivate-wos-journals-js-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your clarivate-wos-journals-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var ClarivateWosJournalsJsClient = require('clarivate-wos-journals-js-client');


var api = new ClarivateWosJournalsJsClient.CategoriesApi()
var opts = {
  'q': "q_example", // {String} Free-text search by category name.  Search logic is described in the section [Search](#search).
  'edition': "edition_example", // {String} Filter by Web of Sceince Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded (ournals across more than 170 disciplines) - SSCI - Social Sciences Citation Index (journals across more than 50 social science disciplines)  Multiple values are allowed, separated by semicolon ( **;** )
  'jcrYear': 56, // {Number} Filter by Category Citation Report year (from 2003).  Only one value is allowed.
  'page': 1, // {Number} Specifying a page to retrieve
  'limit': 10 // {Number} Number of returned results, ranging from 0 to 50
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.categoriesGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://wos-journals-snapshot.cortellis.int.clarivate.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ClarivateWosJournalsJsClient.CategoriesApi* | [**categoriesGet**](docs/CategoriesApi.md#categoriesGet) | **GET** /categories | Search and filter across the journal categories
*ClarivateWosJournalsJsClient.CategoriesApi* | [**categoriesIdCitedYearYearGet**](docs/CategoriesApi.md#categoriesIdCitedYearYearGet) | **GET** /categories/{id}/cited/year/{year} | Get journals that cite all journals in the category for the JCR year
*ClarivateWosJournalsJsClient.CategoriesApi* | [**categoriesIdCitingYearYearGet**](docs/CategoriesApi.md#categoriesIdCitingYearYearGet) | **GET** /categories/{id}/citing/year/{year} | Get journals that were cited by all journals from the category for the JCR year
*ClarivateWosJournalsJsClient.CategoriesApi* | [**categoriesIdGet**](docs/CategoriesApi.md#categoriesIdGet) | **GET** /categories/{id} | Get a category
*ClarivateWosJournalsJsClient.CategoriesApi* | [**categoriesIdReportsYearYearGet**](docs/CategoriesApi.md#categoriesIdReportsYearYearGet) | **GET** /categories/{id}/reports/year/{year} | Get category metrics for a year
*ClarivateWosJournalsJsClient.JournalsApi* | [**journalsGet**](docs/JournalsApi.md#journalsGet) | **GET** /journals | Search and filter across JCR Journals
*ClarivateWosJournalsJsClient.JournalsApi* | [**journalsIdCitedYearYearGet**](docs/JournalsApi.md#journalsIdCitedYearYearGet) | **GET** /journals/{id}/cited/year/{year} | Get journals that cite the journal for the JCR year
*ClarivateWosJournalsJsClient.JournalsApi* | [**journalsIdCitingYearYearGet**](docs/JournalsApi.md#journalsIdCitingYearYearGet) | **GET** /journals/{id}/citing/year/{year} | Get journals that were cited by the journal for the JCR year
*ClarivateWosJournalsJsClient.JournalsApi* | [**journalsIdGet**](docs/JournalsApi.md#journalsIdGet) | **GET** /journals/{id} | Get journal by id
*ClarivateWosJournalsJsClient.JournalsApi* | [**journalsIdHistoryGet**](docs/JournalsApi.md#journalsIdHistoryGet) | **GET** /journals/{id}/history | Get journal history by id
*ClarivateWosJournalsJsClient.JournalsApi* | [**journalsIdReportsYearYearGet**](docs/JournalsApi.md#journalsIdReportsYearYearGet) | **GET** /journals/{id}/reports/year/{year} | Get journal metrics for a year


## Documentation for Models

 - [ClarivateWosJournalsJsClient.CategoriesCited](docs/CategoriesCited.md)
 - [ClarivateWosJournalsJsClient.CategoriesCitedHits](docs/CategoriesCitedHits.md)
 - [ClarivateWosJournalsJsClient.CategoriesCitedJournal](docs/CategoriesCitedJournal.md)
 - [ClarivateWosJournalsJsClient.CategoriesCiting](docs/CategoriesCiting.md)
 - [ClarivateWosJournalsJsClient.CategoriesCitingHits](docs/CategoriesCitingHits.md)
 - [ClarivateWosJournalsJsClient.CategoriesCitingJournal](docs/CategoriesCitingJournal.md)
 - [ClarivateWosJournalsJsClient.CategoryData](docs/CategoryData.md)
 - [ClarivateWosJournalsJsClient.CategoryList](docs/CategoryList.md)
 - [ClarivateWosJournalsJsClient.CategoryListRecord](docs/CategoryListRecord.md)
 - [ClarivateWosJournalsJsClient.CategoryRecord](docs/CategoryRecord.md)
 - [ClarivateWosJournalsJsClient.CategoryReports](docs/CategoryReports.md)
 - [ClarivateWosJournalsJsClient.CategoryReportsJournals](docs/CategoryReportsJournals.md)
 - [ClarivateWosJournalsJsClient.CategoryReportsSourceData](docs/CategoryReportsSourceData.md)
 - [ClarivateWosJournalsJsClient.CategoryReportsSourceDataArticles](docs/CategoryReportsSourceDataArticles.md)
 - [ClarivateWosJournalsJsClient.CategoryReportsSourceDataReviews](docs/CategoryReportsSourceDataReviews.md)
 - [ClarivateWosJournalsJsClient.CitedData](docs/CitedData.md)
 - [ClarivateWosJournalsJsClient.CitingData](docs/CitingData.md)
 - [ClarivateWosJournalsJsClient.Frequency](docs/Frequency.md)
 - [ClarivateWosJournalsJsClient.HalfLife](docs/HalfLife.md)
 - [ClarivateWosJournalsJsClient.Immediacy](docs/Immediacy.md)
 - [ClarivateWosJournalsJsClient.ImpactMetrics](docs/ImpactMetrics.md)
 - [ClarivateWosJournalsJsClient.InfluenceMetrics](docs/InfluenceMetrics.md)
 - [ClarivateWosJournalsJsClient.InfluenceMetricsEigenFactor](docs/InfluenceMetricsEigenFactor.md)
 - [ClarivateWosJournalsJsClient.Jif](docs/Jif.md)
 - [ClarivateWosJournalsJsClient.JifAggregate](docs/JifAggregate.md)
 - [ClarivateWosJournalsJsClient.JournalData](docs/JournalData.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecord](docs/JournalHistoryRecord.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordIsoTitle](docs/JournalHistoryRecordIsoTitle.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordIssn](docs/JournalHistoryRecordIssn.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordName](docs/JournalHistoryRecordName.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordPublisher](docs/JournalHistoryRecordPublisher.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordPublisher1](docs/JournalHistoryRecordPublisher1.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordYear](docs/JournalHistoryRecordYear.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordYear1](docs/JournalHistoryRecordYear1.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordYear2](docs/JournalHistoryRecordYear2.md)
 - [ClarivateWosJournalsJsClient.JournalHistoryRecordYear3](docs/JournalHistoryRecordYear3.md)
 - [ClarivateWosJournalsJsClient.JournalList](docs/JournalList.md)
 - [ClarivateWosJournalsJsClient.JournalListRecord](docs/JournalListRecord.md)
 - [ClarivateWosJournalsJsClient.JournalListRecordJournalCitationReports](docs/JournalListRecordJournalCitationReports.md)
 - [ClarivateWosJournalsJsClient.JournalListRecordMetrics](docs/JournalListRecordMetrics.md)
 - [ClarivateWosJournalsJsClient.JournalListRecordMetricsImpactMetrics](docs/JournalListRecordMetricsImpactMetrics.md)
 - [ClarivateWosJournalsJsClient.JournalListRecordMetricsSourceMetrics](docs/JournalListRecordMetricsSourceMetrics.md)
 - [ClarivateWosJournalsJsClient.JournalListRecordRanks](docs/JournalListRecordRanks.md)
 - [ClarivateWosJournalsJsClient.JournalListRecordRanksJci](docs/JournalListRecordRanksJci.md)
 - [ClarivateWosJournalsJsClient.JournalListRecordRanksJif](docs/JournalListRecordRanksJif.md)
 - [ClarivateWosJournalsJsClient.JournalProfile](docs/JournalProfile.md)
 - [ClarivateWosJournalsJsClient.JournalProfileCitableItems](docs/JournalProfileCitableItems.md)
 - [ClarivateWosJournalsJsClient.JournalProfileCitations](docs/JournalProfileCitations.md)
 - [ClarivateWosJournalsJsClient.JournalProfileOccurrenceCountries](docs/JournalProfileOccurrenceCountries.md)
 - [ClarivateWosJournalsJsClient.JournalProfileOccurrenceOrganizations](docs/JournalProfileOccurrenceOrganizations.md)
 - [ClarivateWosJournalsJsClient.JournalRecord](docs/JournalRecord.md)
 - [ClarivateWosJournalsJsClient.JournalReports](docs/JournalReports.md)
 - [ClarivateWosJournalsJsClient.JournalReportsJournal](docs/JournalReportsJournal.md)
 - [ClarivateWosJournalsJsClient.JournalReportsMetrics](docs/JournalReportsMetrics.md)
 - [ClarivateWosJournalsJsClient.JournalsCited](docs/JournalsCited.md)
 - [ClarivateWosJournalsJsClient.JournalsCitedHits](docs/JournalsCitedHits.md)
 - [ClarivateWosJournalsJsClient.JournalsCitesJournal](docs/JournalsCitesJournal.md)
 - [ClarivateWosJournalsJsClient.JournalsCiting](docs/JournalsCiting.md)
 - [ClarivateWosJournalsJsClient.JournalsCitingHits](docs/JournalsCitingHits.md)
 - [ClarivateWosJournalsJsClient.Metadata](docs/Metadata.md)
 - [ClarivateWosJournalsJsClient.OpenAccess](docs/OpenAccess.md)
 - [ClarivateWosJournalsJsClient.Publisher](docs/Publisher.md)
 - [ClarivateWosJournalsJsClient.RankQuartileData](docs/RankQuartileData.md)
 - [ClarivateWosJournalsJsClient.Ranks](docs/Ranks.md)
 - [ClarivateWosJournalsJsClient.RanksEsiCitations](docs/RanksEsiCitations.md)
 - [ClarivateWosJournalsJsClient.RanksJif](docs/RanksJif.md)
 - [ClarivateWosJournalsJsClient.SearchMatch](docs/SearchMatch.md)
 - [ClarivateWosJournalsJsClient.SourceData](docs/SourceData.md)
 - [ClarivateWosJournalsJsClient.SourceDataArticles](docs/SourceDataArticles.md)
 - [ClarivateWosJournalsJsClient.SourceMetrics](docs/SourceMetrics.md)
 - [ClarivateWosJournalsJsClient.SourceMetricsCitableItems](docs/SourceMetricsCitableItems.md)


## Documentation for Authorization

All endpoints do not require authorization.
