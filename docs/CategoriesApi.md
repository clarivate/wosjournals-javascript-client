# WebOfScienceJournalsApi.CategoriesApi

All URIs are relative to *http://wos-journals-snapshot.cortellis.int.clarivate.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**categoriesGet**](CategoriesApi.md#categoriesGet) | **GET** /categories | Search and filter across the journal categories
[**categoriesIdCitedYearYearGet**](CategoriesApi.md#categoriesIdCitedYearYearGet) | **GET** /categories/{id}/cited/year/{year} | Get journals that cite all journals in the category for the JCR year
[**categoriesIdCitingYearYearGet**](CategoriesApi.md#categoriesIdCitingYearYearGet) | **GET** /categories/{id}/citing/year/{year} | Get journals that were cited by all journals from the category for the JCR year
[**categoriesIdGet**](CategoriesApi.md#categoriesIdGet) | **GET** /categories/{id} | Get a category
[**categoriesIdReportsYearYearGet**](CategoriesApi.md#categoriesIdReportsYearYearGet) | **GET** /categories/{id}/reports/year/{year} | Get category metrics for a year



## categoriesGet

> CategoryList categoriesGet(opts)

Search and filter across the journal categories

The endpoint allows to search, filter, or browse across the Categories content.  The endpoint doesn&#39;t require any parameter to return results, although only main information for the first ten records sorted alphabetically will be retrieved.  To get comprehensive results, a set of parameters could be applied: - &#x60;q&#x60;: Category name - &#x60;edition&#x60;: filter by category edition - &#x60;jcrYear&#x60;: filter by Category Report Year (since 203) - &#x60;limit&#x60;: set the limit of records on the page (1-50) - &#x60;page&#x60;: set the result page  By default, all the responses are sorted alphabetically, only in case of search the results will be sorted by relevance.  The response contains: - Main information about the number of records found, page and limit - Category unique ID (based on category code and edition) - API Link to Category record - Category title - Search matches with the found phrase ***&amp;lt;em&amp;gt;*** *highlighted* ***&amp;lt;/em&amp;gt;*** - only if parameter &#x60;q&#x60; is requested - Edition information - only if the parameter &#x60;edition&#x60; is requested - Link to the Category Report - only if parameter &#x60;jcrYear&#x60; is requested

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.CategoriesApi();
let opts = {
  'q': "q_example", // String | Free-text search by category name.  Search logic is described in the section [Search](#search).
  'edition': "edition_example", // String | Filter by Web of Sceince Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded (ournals across more than 170 disciplines) - SSCI - Social Sciences Citation Index (journals across more than 50 social science disciplines)  Multiple values are allowed, separated by semicolon ( **;** )
  'jcrYear': 56, // Number | Filter by Category Citation Report year (from 2003).  Only one value is allowed.
  'page': 1, // Number | Specifying a page to retrieve
  'limit': 10 // Number | Number of returned results, ranging from 0 to 50
};
apiInstance.categoriesGet(opts, (error, data, response) => {
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
 **q** | **String**| Free-text search by category name.  Search logic is described in the section [Search](#search). | [optional] 
 **edition** | **String**| Filter by Web of Sceince Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded (ournals across more than 170 disciplines) - SSCI - Social Sciences Citation Index (journals across more than 50 social science disciplines)  Multiple values are allowed, separated by semicolon ( **;** ) | [optional] 
 **jcrYear** | **Number**| Filter by Category Citation Report year (from 2003).  Only one value is allowed. | [optional] 
 **page** | **Number**| Specifying a page to retrieve | [optional] [default to 1]
 **limit** | **Number**| Number of returned results, ranging from 0 to 50 | [optional] [default to 10]

### Return type

[**CategoryList**](CategoryList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoriesIdCitedYearYearGet

> CategoriesCited categoriesIdCitedYearYearGet(id, year, opts)

Get journals that cite all journals in the category for the JCR year

The Cited Subject Category table lists journals that cite other journals in the subject category.  Category Cited data contains:  - Citing **Journal** with the link to WoS Journal API entity.&lt;br /&gt; Citing journals are sorted in descending order. At the top is the journal with the largest number of citations to the subject category. - **Cited journals**: The number of journals in the subject category. - **Cited year (all)**:  The total number of citations from the citing journal. This total includes the number shown under each year and the number in the \&quot;Rest\&quot;. - **Cited Year (10-year interval)**: The publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the ten-year period defined. For example, if the cited years are 2013-2004, the Rest number will show the number of citations from the citing journal in 2012 to articles published in 2003 and earlier in journals in the subject category.     Numbers in the \&quot;All Journals\&quot; are sums of the numbers for each year. \&quot;All others\&quot; refers to citing journals not listed by name.    For detailed information, please visit [this page](http://jcr.help.clarivate.com/Content/cited-category-data.htm)

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.CategoriesApi();
let id = RU_SCIE; // String | Category ID
let year = 2014; // Number | JCR Year (from 2003)
let opts = {
  'page': 1, // Number | Specifying a page to retrieve
  'limit': 10 // Number | Number of returned results, ranging from 0 to 50
};
apiInstance.categoriesIdCitedYearYearGet(id, year, opts, (error, data, response) => {
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
 **id** | **String**| Category ID | 
 **year** | **Number**| JCR Year (from 2003) | 
 **page** | **Number**| Specifying a page to retrieve | [optional] [default to 1]
 **limit** | **Number**| Number of returned results, ranging from 0 to 50 | [optional] [default to 10]

### Return type

[**CategoriesCited**](CategoriesCited.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoriesIdCitingYearYearGet

> CategoriesCiting categoriesIdCitingYearYearGet(id, year, opts)

Get journals that were cited by all journals from the category for the JCR year

Category Citing data contains:  - Cited **Journal** with the link to WoS Journal API entity.&lt;br /&gt; Cited journals are sorted in descending order. At the top is the journal with the largest number of citations to the subject category. - **Citing journals**: The number of journals in the subject category. - **Cited year (all)**:  The total number of citations to the citing journal. This total includes the number shown under each year and the number in the \&quot;Rest\&quot;. - **Cited Year (10-year interval)**: The publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the ten-year period defined. For example, if the cited years are 2013-2004, the Rest number will show the number of citations from the citing journal in 2012 to articles published in 2003 and earlier in journals in the subject category.     Numbers in the \&quot;All Journals\&quot; are sums of the numbers for each year. \&quot;All others\&quot; refers to citing journals not listed by name.    For detailed information, please visit [this page](http://jcr.help.clarivate.com/Content/citing-category-data.htm)

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.CategoriesApi();
let id = RU_SCIE; // String | Category ID
let year = 2014; // Number | JCR Year (from 2003)
let opts = {
  'page': 1, // Number | Specifying a page to retrieve
  'limit': 10 // Number | Number of returned results, ranging from 0 to 50
};
apiInstance.categoriesIdCitingYearYearGet(id, year, opts, (error, data, response) => {
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
 **id** | **String**| Category ID | 
 **year** | **Number**| JCR Year (from 2003) | 
 **page** | **Number**| Specifying a page to retrieve | [optional] [default to 1]
 **limit** | **Number**| Number of returned results, ranging from 0 to 50 | [optional] [default to 10]

### Return type

[**CategoriesCiting**](CategoriesCiting.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoriesIdGet

> CategoryRecord categoriesIdGet(id)

Get a category

The category profile provides a comprehensive overview, beginning in 2003, for each of more than 230 different subject categories in the JCR.  Information contain the name, description and links to each JCR Category Year Report (starting from 2003)

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.CategoriesApi();
let id = RU_SCIE; // String | Category ID, consisting of a two-letter category code and four-letter edition, separated by **_** (i.e., ***RZ_SSCI*** or ***IP_SCIE***)
apiInstance.categoriesIdGet(id, (error, data, response) => {
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
 **id** | **String**| Category ID, consisting of a two-letter category code and four-letter edition, separated by **_** (i.e., ***RZ_SSCI*** or ***IP_SCIE***) | 

### Return type

[**CategoryRecord**](CategoryRecord.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## categoriesIdReportsYearYearGet

> CategoryReports categoriesIdReportsYearYearGet(id, year)

Get category metrics for a year

For each JCR year all metrics related to a subject category in the Journal Citation Record are available, including: number of journals and articles in the category, Total Cites, Median Impact Factor, Aggregate Impact Factor, Aggregate Immediacy Index, and Cited and Citing category half-life.  Please find detailed information about the metrics in the Journals by JCR Year Report output

### Example

```javascript
import WebOfScienceJournalsApi from 'web_of_science_journals_api';

let apiInstance = new WebOfScienceJournalsApi.CategoriesApi();
let id = RU_SCIE; // String | Category ID
let year = 2016; // Number | Category report year
apiInstance.categoriesIdReportsYearYearGet(id, year, (error, data, response) => {
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
 **id** | **String**| Category ID | 
 **year** | **Number**| Category report year | 

### Return type

[**CategoryReports**](CategoryReports.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

