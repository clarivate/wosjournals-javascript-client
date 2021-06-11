# WebOfScienceJournalsApi.JournalsApi

All URIs are relative to *http://wos-journals-snapshot.cortellis.int.clarivate.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**journalsGet**](JournalsApi.md#journalsGet) | **GET** /journals | Search and filter across JCR Journals
[**journalsIdCitedYearYearGet**](JournalsApi.md#journalsIdCitedYearYearGet) | **GET** /journals/{id}/cited/year/{year} | Get journals that cite the journal for the JCR year
[**journalsIdCitingYearYearGet**](JournalsApi.md#journalsIdCitingYearYearGet) | **GET** /journals/{id}/citing/year/{year} | Get journals that were cited by the journal for the JCR year
[**journalsIdGet**](JournalsApi.md#journalsIdGet) | **GET** /journals/{id} | Get journal by id
[**journalsIdReportsYearYearGet**](JournalsApi.md#journalsIdReportsYearYearGet) | **GET** /journals/{id}/reports/year/{year} | Get journal metrics for a year



## journalsGet

> JournalList journalsGet(opts)

Search and filter across JCR Journals

The endpoint allows to search, filter, or browse across the Journals content.  The endpoint doesn&#39;t require any parameter to return results, although only main information for the first ten records sorted alphabetically will be retrieved.  To get comprehensive results, a set of parameters could be applied: - &#x60;q&#x60;: ISSN or title/publisher search - &#x60;edition&#x60;: filter by journal edition - &#x60;categoryCode&#x60;: filter by WoS journal category - &#x60;jcrYear&#x60;: filter by Journal Citation Report Year (since 1997) - &#x60;jif&#x60;: filter by Journal Impact Factor (JIF) - &#x60;jifPercentile&#x60;: filter by Journal Impact Factor Percentile (0-100) - &#x60;jifQuartile&#x60;: filter by Journal Impact Factor Rank Quartile - &#x60;limit&#x60;: set the limit of records on the page (1-50) - &#x60;page&#x60;: set the result page  By default, all the responses are sorted alphabetically, only in case of search the results will be sorted by relevance.  The response contains: - Main information about the number of records found, page and limit - Journals unique ID (based on JCR abbreviated title) - API Link to Journal record - Journal title - Search matches with the found phrase ***&amp;lt;em&amp;gt;*** *highlighted* ***&amp;lt;/em&amp;gt;*** - only if parameter &#x60;q&#x60; is requested - Category information (unique ID, category name, and edition) - only if the parameter &#x60;categoryCode&#x60; or &#x60;edition&#x60; is requested - Link to the Journal Citation Report - only if parameter &#x60;jcrYear&#x60; is requested - Metrics information (Impact metrics) - only if parameter &#x60;jif&#x60; is requested - Metrics information (Source metrics) - only if parameter &#x60;jifPercentile&#x60; is requested - Ranks information (JIF rank and quartile within the category) - only if parameter &#x60;jifQuartile&#x60; is requested

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.JournalsApi();
let opts = {
  'q': 0945-053X, // String | Free-text search by journal name (e.g. *Nature Genetics*), JCR abbreviation (e.g. *NAT GENET*), publisher (e.g. *PUBLIC LIBRARY SCIENCE*) or [ISSN / eISSN code](https://www.issn.org/understanding-the-issn/what-is-an-issn/) (e.g. *1061-4036*)  The search logic is described in the section [Search](#search).
  'edition': "edition_example", // String | Filter by Web of Science Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded (journals across more than 170 disciplines) - SSCI - Social Sciences Citation Index (journals across more than 50 social science disciplines)  Multiple values are allowed, separated by a semicolon ( **;** )
  'categoryCode': IP, // String | Filter journals by category identifiers.  Each journal in JCR is assigned to at least one of the subject categories, indicating a general area of science or the social sciences. Journals may be included in more than one subject category.  Multiple values are allowed, separated by a semicolon ( **;** )
  'jcrYear': 2019, // Number | Filter by Journal Citation Report year (from 1997).  **NOTE:** The filter **jcrYear** is mandatory while using **jif**, **jifPercentile**, and **jifQuartile** filters  Only one value is allowed.
  'jif': gte:5.0, // String | Filter by [Journal Impact Factor](http://jcr.help.clarivate.com/Content/glossary.htm#610062182_anchor28) (JIF).  **NOTE:** The filter **jcrYear** is mandatory while using **jif** filter  Filter logic is described in the section [Filter by range](#range)
  'jifPercentile': gte:70.0 AND lte:90.0, // String | Filter by [Journal Impact Factor Percentile](http://jcr.help.clarivate.com/Content/glossary-journal-impact-factor-percentile.htm), ranging from 0 to 100  **NOTE:** The filter **jcrYear** is mandatory while using **jifPercentile** filter  Filter logic is described in the section [Filter by range](#range)
  'jifQuartile': "jifQuartile_example", // String | Filter by journal impact factor quartile rank for a category, from highest to lowest based on their journal impact factor: <br />Q1 is represented by the top 25% of journals in the category; <br />Q2 is occupied by journals in the 25 to 50% group; <br />Q3 is occupied by journals in the 50 to 75% group; <br />Q4 is occupied by journals in the 75 to 100% group.  **NOTE:** The filter **jcrYear** is mandatory while using **jifQuartile** filter  Multiple values are allowed, separated by a semicolon ( **;** )
  'page': 1, // Number | Specifying a page to retrieve
  'limit': 10 // Number | Number of returned results, ranging from 0 to 50
};
apiInstance.journalsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **String**| Free-text search by journal name (e.g. *Nature Genetics*), JCR abbreviation (e.g. *NAT GENET*), publisher (e.g. *PUBLIC LIBRARY SCIENCE*) or [ISSN / eISSN code](https://www.issn.org/understanding-the-issn/what-is-an-issn/) (e.g. *1061-4036*)  The search logic is described in the section [Search](#search). | [optional] 
 **edition** | **String**| Filter by Web of Science Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded (journals across more than 170 disciplines) - SSCI - Social Sciences Citation Index (journals across more than 50 social science disciplines)  Multiple values are allowed, separated by a semicolon ( **;** ) | [optional] 
 **categoryCode** | **String**| Filter journals by category identifiers.  Each journal in JCR is assigned to at least one of the subject categories, indicating a general area of science or the social sciences. Journals may be included in more than one subject category.  Multiple values are allowed, separated by a semicolon ( **;** ) | [optional] 
 **jcrYear** | **Number**| Filter by Journal Citation Report year (from 1997).  **NOTE:** The filter **jcrYear** is mandatory while using **jif**, **jifPercentile**, and **jifQuartile** filters  Only one value is allowed. | [optional] 
 **jif** | **String**| Filter by [Journal Impact Factor](http://jcr.help.clarivate.com/Content/glossary.htm#610062182_anchor28) (JIF).  **NOTE:** The filter **jcrYear** is mandatory while using **jif** filter  Filter logic is described in the section [Filter by range](#range) | [optional] 
 **jifPercentile** | **String**| Filter by [Journal Impact Factor Percentile](http://jcr.help.clarivate.com/Content/glossary-journal-impact-factor-percentile.htm), ranging from 0 to 100  **NOTE:** The filter **jcrYear** is mandatory while using **jifPercentile** filter  Filter logic is described in the section [Filter by range](#range) | [optional] 
 **jifQuartile** | **String**| Filter by journal impact factor quartile rank for a category, from highest to lowest based on their journal impact factor: &lt;br /&gt;Q1 is represented by the top 25% of journals in the category; &lt;br /&gt;Q2 is occupied by journals in the 25 to 50% group; &lt;br /&gt;Q3 is occupied by journals in the 50 to 75% group; &lt;br /&gt;Q4 is occupied by journals in the 75 to 100% group.  **NOTE:** The filter **jcrYear** is mandatory while using **jifQuartile** filter  Multiple values are allowed, separated by a semicolon ( **;** ) | [optional] 
 **page** | **Number**| Specifying a page to retrieve | [optional] [default to 1]
 **limit** | **Number**| Number of returned results, ranging from 0 to 50 | [optional] [default to 10]

### Return type

[**JournalList**](JournalList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## journalsIdCitedYearYearGet

> JournalsCited journalsIdCitedYearYearGet(id, year, opts)

Get journals that cite the journal for the JCR year

Cited Journal data show how many citations a journal received in the JCR year. Cited journal data is relevant when analyzing metrics such as the Journal Impact Factor and Market Share.  The response contains:  - Citing **Journal** with the link to WoS Journal API entity - **Cited Year (all)**:  The total number of citations from the citing journal. This total includes the number shown under each year and the number in the Rest column. - **Cited Year (10 years interval)**: Publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the 10-year period defined by the table. For example, if the cited years shown are 2017-2008, the Rest column will show the number of citations from the citing journal in 2017 to articles published in the cited journal in 2007 and any earlier year.   Please see the detailed infomration in the [JCR Help page](http://jcr.help.clarivate.com/Content/cited-journal-data.htm)

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.JournalsApi();
let id = PLOS_ONE; // String | Journal unique identifier
let year = 2017; // Number | Journal Citation Report Year (from 1997)
let opts = {
  'page': 1, // Number | Specifying a page to retrieve
  'limit': 10 // Number | Number of returned results, ranging from 0 to 50
};
apiInstance.journalsIdCitedYearYearGet(id, year, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Journal unique identifier | 
 **year** | **Number**| Journal Citation Report Year (from 1997) | 
 **page** | **Number**| Specifying a page to retrieve | [optional] [default to 1]
 **limit** | **Number**| Number of returned results, ranging from 0 to 50 | [optional] [default to 10]

### Return type

[**JournalsCited**](JournalsCited.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## journalsIdCitingYearYearGet

> JournalsCiting journalsIdCitingYearYearGet(id, year, opts)

Get journals that were cited by the journal for the JCR year

The response contains:  - Cited **Journal** with the link to WoS Journal API entity - **Cited Year (all)**:  The total number of citations to the cited journal. This total includes the number shown under each year and the number in the Rest column. - **Cited Year (10 years interval)**: Publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the 10-year period defined by the table. For example, if the cited years shown are 2017-2008, the Rest column will show the number of citations from the citing journal in 2017 to articles published in the cited journal in 2007 and any earlier year.   Please see the detailed infomration in the [JCR Help page](http://jcr.help.clarivate.com/Content/citing-journal-data.htm)

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.JournalsApi();
let id = PLOS_ONE; // String | An Journal ID
let year = 2017; // Number | A citing Year
let opts = {
  'page': 1, // Number | Specifying a page to retrieve
  'limit': 10 // Number | Number of returned results, ranging from 0 to 50
};
apiInstance.journalsIdCitingYearYearGet(id, year, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| An Journal ID | 
 **year** | **Number**| A citing Year | 
 **page** | **Number**| Specifying a page to retrieve | [optional] [default to 1]
 **limit** | **Number**| Number of returned results, ranging from 0 to 50 | [optional] [default to 10]

### Return type

[**JournalsCiting**](JournalsCiting.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## journalsIdGet

> JournalRecord journalsIdGet(id)

Get journal by id

A journal entity contains: - basic bibliographic information about the journal, including publisher, ISSN and e-ISSN (where available), open access status, language, frequency of publication, and Web of Science categorization. - links to the multi-year Journal Citation Report data, starting from 1997.  For more information about Journal inclusion in the index, please visit [this page](http://jcr.help.clarivate.com/Content/scope-notes.htm)

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.JournalsApi();
let id = PLOS_ONE; // String | Journal unique identifier  Currently an identifier is a JCR abbreviation, where blank spaces are substituted with underscores (e.g. *PLOS ONE* Journal has the ID **PLOS_ONE**)
apiInstance.journalsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Journal unique identifier  Currently an identifier is a JCR abbreviation, where blank spaces are substituted with underscores (e.g. *PLOS ONE* Journal has the ID **PLOS_ONE**) | 

### Return type

[**JournalRecord**](JournalRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## journalsIdReportsYearYearGet

> JournalReports journalsIdReportsYearYearGet(id, year)

Get journal metrics for a year

This endpoint returns the information about Journal Citation Report by year.  The response contains: - Journal name and link to the Journal entry - Key indications (metrics): impact, source and influence - Journal Impact Factor and ESI citations ranks - Journal Source Data - Three-year content analysis by country/region and organization - Links to the related Cited/Citing reports

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.JournalsApi();
let id = PLOS_ONE; // String | Journal unique identifier  Currently an identifier is a JCR abbreviation, where blank spaces are substituted with underscores (e.g. *PLOS ONE* Journal has the ID **PLOS_ONE**)
let year = 2017; // Number | Journal Citation Report year (jcrYear)
apiInstance.journalsIdReportsYearYearGet(id, year, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Journal unique identifier  Currently an identifier is a JCR abbreviation, where blank spaces are substituted with underscores (e.g. *PLOS ONE* Journal has the ID **PLOS_ONE**) | 
 **year** | **Number**| Journal Citation Report year (jcrYear) | 

### Return type

[**JournalReports**](JournalReports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

