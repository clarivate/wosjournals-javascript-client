# web_of_science_journals_api

WebOfScienceJournalsApi - JavaScript client for web_of_science_journals_api
This API provides journal-level metadata and metrics for all journals in the Journal Citation Reports™ covered in the Web of Science Core Collection, including the Journal Impact Factor™ and other new metrics. Integrate journal data into your internal systems or retrieve journal indicators for bibliometrics studies.

## Resources
This API follows the REST approach to disclose resources in URL format. Only the GET method is currently available to perform requests over HTTP.

The API is available on the [Clarivate Developer Portal](https://developer.clarivate.com/apis/wos-journal). The access requires registration on the Portal and approval from the Clarivate Sales/Product teams to entitle to the API.

## Credentials
All requests require authentication with an API Key authentication flow. For more details, check the [Guide](https://developer.clarivate.com/help/api-access#key_access).


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
- Filter by **range**: *jif*, *jifPercentile*

### Filter by values
The filter name goes before the equals sign, followed by one or multiple filter values, separated by a semicolon, like `categoryCode=RZ;RU`. You can combine various filters with or without the search. Filters are separated by an ampersand (**&amp;**): `q=nature&categoryCode=RU;KM&jcrYear=2018`

Please note&#58; filter by *jcrYear* allows only one year value as an input

### <a name='range'></a> Filter by range
The API supports range filtering for Journal Impact Factor (*jif*) or Journal Impact Factor Percentile (*jifPercentile*) with the following operators:

- ***eq*** (equal): if a Journal Impact Factor (Percentile) is equal to a specific number.<br /> For example: for `jif=eq:5.032` the result will include journals with Journal Impact Factor = 5.032.<br /> Not combinable with any other operator
- ***gt*** (greater than): if a Journal Impact Factor (Percentile) is greater than a specific number.<br /> For example: for `jif=gt:5` the result will include journals with Journal Impact Factor = 5.001 and higher.<br /> Combinable with *lt* and *lte* operators
- ***gte*** (greater than equal): if a Journal Impact Factor (Percentile) is greater than or equal to a specific number.<br /> For example: for `jif=gte:5` the result will include journals with Journal Impact Factor = 5.000 and higher.<br /> Combinable with *lt* and *lte* operators
- ***lt*** (less than): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lt:5` the result will include journals with Journal Impact Factor = 4.999 and less.<br /> Combinable with *gt* and *gte* operators
- ***gt*** (less than equal): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lte:5` the result will include journals with Journal Impact Factor = 5.000 and less.<br /> Combinable with *gt* and *gte* operators

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
npm install web_of_science_journals_api --save
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

To use the link you just defined in your project, switch to the directory you want to use your web_of_science_journals_api from, and run:

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
var WebOfScienceJournalsApi = require('web_of_science_journals_api');

var api = new WebOfScienceJournalsApi.CategoriesApi()

-- ************************* Place your token here 
api.extraHeaderParams = {'X-ApiKey': 'your token goes here'};

var opts = {
  'q': "ANTHROPOLOGY", // {String} Free-text search by category name.  Search logic is described in the section [Search](#search).
  'edition': "SSCI", // {String} Filter by Web of Sceince Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded (ournals across more than 170 disciplines) - SSCI - Social Sciences Citation Index (journals across more than 50 social science disciplines)  Multiple values are allowed, separated by semicolon ( **;** )
  'jcrYear': 2016, // {Number} Filter by Category Citation Report year (from 2003).  Only one value is allowed.
  'page': 1, // {Number} Specifying a page to retrieve
  'limit': 10 // {Number} Number of returned results, ranging from 0 to 50
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned identifier: ' + data.hits[0].id);
  }
};

api.categoriesGet(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://wos-journals-snapshot.cortellis.int.clarivate.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*WebOfScienceJournalsApi.CategoriesApi* | [**categoriesGet**](docs/CategoriesApi.md#categoriesGet) | **GET** /categories | Search and filter across the journal categories
*WebOfScienceJournalsApi.CategoriesApi* | [**categoriesIdCitedYearYearGet**](docs/CategoriesApi.md#categoriesIdCitedYearYearGet) | **GET** /categories/{id}/cited/year/{year} | Get journals that cite all journals in the category for the JCR year
*WebOfScienceJournalsApi.CategoriesApi* | [**categoriesIdCitingYearYearGet**](docs/CategoriesApi.md#categoriesIdCitingYearYearGet) | **GET** /categories/{id}/citing/year/{year} | Get journals that were cited by all journals from the category for the JCR year
*WebOfScienceJournalsApi.CategoriesApi* | [**categoriesIdGet**](docs/CategoriesApi.md#categoriesIdGet) | **GET** /categories/{id} | Get a category
*WebOfScienceJournalsApi.CategoriesApi* | [**categoriesIdReportsYearYearGet**](docs/CategoriesApi.md#categoriesIdReportsYearYearGet) | **GET** /categories/{id}/reports/year/{year} | Get category metrics for a year
*WebOfScienceJournalsApi.JournalsApi* | [**journalsGet**](docs/JournalsApi.md#journalsGet) | **GET** /journals | Search and filter across JCR Journals
*WebOfScienceJournalsApi.JournalsApi* | [**journalsIdCitedYearYearGet**](docs/JournalsApi.md#journalsIdCitedYearYearGet) | **GET** /journals/{id}/cited/year/{year} | Get journals that cite the journal for the JCR year
*WebOfScienceJournalsApi.JournalsApi* | [**journalsIdCitingYearYearGet**](docs/JournalsApi.md#journalsIdCitingYearYearGet) | **GET** /journals/{id}/citing/year/{year} | Get journals that were cited by the journal for the JCR year
*WebOfScienceJournalsApi.JournalsApi* | [**journalsIdGet**](docs/JournalsApi.md#journalsIdGet) | **GET** /journals/{id} | Get journal by id
*WebOfScienceJournalsApi.JournalsApi* | [**journalsIdReportsYearYearGet**](docs/JournalsApi.md#journalsIdReportsYearYearGet) | **GET** /journals/{id}/reports/year/{year} | Get journal metrics for a year


## Documentation for Models

 - [WebOfScienceJournalsApi.CategoriesCited](docs/CategoriesCited.md)
 - [WebOfScienceJournalsApi.CategoriesCitedHits](docs/CategoriesCitedHits.md)
 - [WebOfScienceJournalsApi.CategoriesCitedJournal](docs/CategoriesCitedJournal.md)
 - [WebOfScienceJournalsApi.CategoriesCiting](docs/CategoriesCiting.md)
 - [WebOfScienceJournalsApi.CategoriesCitingHits](docs/CategoriesCitingHits.md)
 - [WebOfScienceJournalsApi.CategoriesCitingJournal](docs/CategoriesCitingJournal.md)
 - [WebOfScienceJournalsApi.CategoryData](docs/CategoryData.md)
 - [WebOfScienceJournalsApi.CategoryList](docs/CategoryList.md)
 - [WebOfScienceJournalsApi.CategoryListRecord](docs/CategoryListRecord.md)
 - [WebOfScienceJournalsApi.CategoryRecord](docs/CategoryRecord.md)
 - [WebOfScienceJournalsApi.CategoryReports](docs/CategoryReports.md)
 - [WebOfScienceJournalsApi.CategoryReportsJournals](docs/CategoryReportsJournals.md)
 - [WebOfScienceJournalsApi.CategoryReportsSourceData](docs/CategoryReportsSourceData.md)
 - [WebOfScienceJournalsApi.CategoryReportsSourceDataArticles](docs/CategoryReportsSourceDataArticles.md)
 - [WebOfScienceJournalsApi.CategoryReportsSourceDataReviews](docs/CategoryReportsSourceDataReviews.md)
 - [WebOfScienceJournalsApi.CitedData](docs/CitedData.md)
 - [WebOfScienceJournalsApi.CitingData](docs/CitingData.md)
 - [WebOfScienceJournalsApi.Frequency](docs/Frequency.md)
 - [WebOfScienceJournalsApi.HalfLife](docs/HalfLife.md)
 - [WebOfScienceJournalsApi.Immediacy](docs/Immediacy.md)
 - [WebOfScienceJournalsApi.ImpactMetrics](docs/ImpactMetrics.md)
 - [WebOfScienceJournalsApi.InfluenceMetrics](docs/InfluenceMetrics.md)
 - [WebOfScienceJournalsApi.InfluenceMetricsEigenFactor](docs/InfluenceMetricsEigenFactor.md)
 - [WebOfScienceJournalsApi.Jif](docs/Jif.md)
 - [WebOfScienceJournalsApi.JifAggregate](docs/JifAggregate.md)
 - [WebOfScienceJournalsApi.JournalData](docs/JournalData.md)
 - [WebOfScienceJournalsApi.JournalList](docs/JournalList.md)
 - [WebOfScienceJournalsApi.JournalListRecord](docs/JournalListRecord.md)
 - [WebOfScienceJournalsApi.JournalListRecordJournalCitationReports](docs/JournalListRecordJournalCitationReports.md)
 - [WebOfScienceJournalsApi.JournalListRecordMetrics](docs/JournalListRecordMetrics.md)
 - [WebOfScienceJournalsApi.JournalListRecordMetricsImpactMetrics](docs/JournalListRecordMetricsImpactMetrics.md)
 - [WebOfScienceJournalsApi.JournalListRecordMetricsSourceMetrics](docs/JournalListRecordMetricsSourceMetrics.md)
 - [WebOfScienceJournalsApi.JournalListRecordRanks](docs/JournalListRecordRanks.md)
 - [WebOfScienceJournalsApi.JournalListRecordRanksJif](docs/JournalListRecordRanksJif.md)
 - [WebOfScienceJournalsApi.JournalProfile](docs/JournalProfile.md)
 - [WebOfScienceJournalsApi.JournalProfileCitableItems](docs/JournalProfileCitableItems.md)
 - [WebOfScienceJournalsApi.JournalProfileCitations](docs/JournalProfileCitations.md)
 - [WebOfScienceJournalsApi.JournalProfileOccurrenceCountries](docs/JournalProfileOccurrenceCountries.md)
 - [WebOfScienceJournalsApi.JournalProfileOccurrenceOrganizations](docs/JournalProfileOccurrenceOrganizations.md)
 - [WebOfScienceJournalsApi.JournalRecord](docs/JournalRecord.md)
 - [WebOfScienceJournalsApi.JournalReports](docs/JournalReports.md)
 - [WebOfScienceJournalsApi.JournalReportsJournal](docs/JournalReportsJournal.md)
 - [WebOfScienceJournalsApi.JournalReportsMetrics](docs/JournalReportsMetrics.md)
 - [WebOfScienceJournalsApi.JournalsCited](docs/JournalsCited.md)
 - [WebOfScienceJournalsApi.JournalsCitedHits](docs/JournalsCitedHits.md)
 - [WebOfScienceJournalsApi.JournalsCitesJournal](docs/JournalsCitesJournal.md)
 - [WebOfScienceJournalsApi.JournalsCiting](docs/JournalsCiting.md)
 - [WebOfScienceJournalsApi.JournalsCitingHits](docs/JournalsCitingHits.md)
 - [WebOfScienceJournalsApi.Metadata](docs/Metadata.md)
 - [WebOfScienceJournalsApi.OpenAccess](docs/OpenAccess.md)
 - [WebOfScienceJournalsApi.Publisher](docs/Publisher.md)
 - [WebOfScienceJournalsApi.Ranks](docs/Ranks.md)
 - [WebOfScienceJournalsApi.RanksEsiCitations](docs/RanksEsiCitations.md)
 - [WebOfScienceJournalsApi.RanksJif](docs/RanksJif.md)
 - [WebOfScienceJournalsApi.SearchMatch](docs/SearchMatch.md)
 - [WebOfScienceJournalsApi.SourceData](docs/SourceData.md)
 - [WebOfScienceJournalsApi.SourceDataArticles](docs/SourceDataArticles.md)
 - [WebOfScienceJournalsApi.SourceMetrics](docs/SourceMetrics.md)
 - [WebOfScienceJournalsApi.SourceMetricsCitableItems](docs/SourceMetricsCitableItems.md)


## Documentation for Authorization

All endpoints do not require authorization.
