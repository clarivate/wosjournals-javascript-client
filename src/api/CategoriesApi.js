/**
 * Web of Science™ Journals API
 * This API provides journal-level metadata and metrics for all journals in the Journal Citation Reports™ covered in the Web of Science Core Collection, including the Journal Impact Factor™ and other new metrics. Integrate journal data into your internal systems or retrieve journal indicators for bibliometrics studies.  ## Resources This API follows the REST approach to disclose resources in URL format. Only the GET method is currently available to perform requests over HTTP.  The API is available on the [Clarivate Developer Portal](https://developer.clarivate.com/apis/wos-journal). The access requires registration on the Portal and approval from the Clarivate Sales/Product teams to entitle to the API.  ## Credentials All requests require authentication with an API Key authentication flow. For more details, check the [Guide](https://developer.clarivate.com/help/api-access#key_access).  ## API Client Libraries The current languages/frameworks are supported: [Python](https://github.com/Clarivate-SAR/wosjournals-py-client) | [Java](https://github.com/Clarivate-SAR/wosjournals_java_client) | [Javascript](https://github.com/Clarivate-SAR/wosjournals_javascript_client)  ## Content You can learn more about content at [Journal Citation Reports™ Product page](https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/), or in the [documentation](http://jcr.help.clarivate.com/Content/home.htm).  ## <a name=\"search\"></a> Search (query parameter `q=`) This API supports free-text search for a journal name, abbreviation, ISSN code, publisher, and Web of Science™ category name (only `/categories` endpoint). You need to provide a complete and valid ISSN code pattern; otherwise, the API will not look up for ISSN codes.  ### Boolean operators | Operator    | Description  | Example| |-----|-----|------------------| | + / \" \" | Search by two or more terms in the same field. Blank space is the same as an AND operator. The search retrieves all the records that contain the terms, e.g., | `/journals?q=matrix biology`<br> `/journals?q=nature+group` | | OR | Search by at least one term in the field. The search retrieves all the records that contain one of the terms, e.g., | `/journals?q=gas OR oil` | | NOT / - | Search by excluding specific terms. The search retrieves all the records that match the query specifics, e.g., | `/journals?q=genetics -nature` |  ### Special symbols The wildcards ( __*__ ) are allowed in the search that starts with the search query&#58; `/journals?q=nano*` will search indications that start from __nano__&#58; for example, _Nanotechnology_ or _nanotubes_.  Please note&#58; the free text search query (with the parameter `q=`) should contain at least three symbols.  ## Filtering The API supports several filters for Journals and Web of Science™ Categories, narrowing down the initial list of entities or search results.  There are two types of filters:  - Filter by one or multiple **values**: *edition*, *categoryCode*, *jcrYear*, *jifQuartile* - Filter by **range**: *jif*, *jifPercentile*, *jci*,   ### Filter by values The filter name goes before the equals sign, followed by one or multiple filter values, separated by a semicolon, like `categoryCode=RZ;RU`. You can combine various filters with or without the search. Filters are separated by an ampersand (**&amp;**): `q=nature&categoryCode=RU;KM&jcrYear=2018`  Please note&#58; filter by *jcrYear* allows only one year value as an input  ### <a name='range'></a> Filter by range The API supports range filtering for Journal Impact Factor (*jif*) or Journal Impact Factor Percentile (*jifPercentile*) with the following operators:  - ***eq*** (equal): if a Journal Impact Factor (Percentile) is equal to a specific number.<br /> For example: for `jif=eq:5.032` the result will include journals with Journal Impact Factor = 5.032.<br /> Not combinable with any other operator - ***gt*** (greater than): if a Journal Impact Factor (Percentile) is greater than a specific number.<br /> For example: for `jif=gt:5` the result will include journals with Journal Impact Factor = 5.001 and higher.<br /> Combinable with *lt* and *lte* operators - ***gte*** (greater than equal): if a Journal Impact Factor (Percentile) is greater than or equal to a specific number.<br /> For example: for `jif=gte:5` the result will include journals with Journal Impact Factor = 5.000 and higher.<br /> Combinable with *lt* and *lte* operators - ***lt*** (less than): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lt:5` the result will include journals with Journal Impact Factor = 4.999 and less.<br /> Combinable with *gt* and *gte* operators - ***lte*** (less than equal): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lte:5` the result will include journals with Journal Impact Factor = 5.000 and less.<br /> Combinable with *gt* and *gte* operators  Use `AND` to combine two operators, e.g.,`jifPercentile=gte:50 AND lte:80` responses with all journals in a percentile range from 50% to 80% (both included).  ## Pagination To ensure fast response time, each search or multiple entity calls (such as `/journals` or `/categories/ID/cited/year/YYYY`) retrieve only a certain number of hits/records.  There are two optional request parameters to browse along with the result&#58; _limit_ and _page_.  - limit&#58; Number of returned results, ranging from 0 to 50 (default **10**) - page&#58; Specifying a page to retrieve (default **1**)  Moreover, this information is shown in the response body, in the tag **metadata**&#58;  ```json \"metadata\": {   \"total\": 91,   \"page\": 1,   \"limit\": 10 } ``` ## Errors The WoS Journals API uses conventional HTTP success or failure status codes. For errors, some extra information is included to indicate what went wrong in the JSON response. The list of HTTP codes is listed below.  | Code  | Title  | Description | |---|---|---| | 400  | Bad request  | Request syntax error | | 401  | Unauthorized  | The API key is invalid or missed | | 404  | Not found  | The resource is not found | | 405 | Method not allowed | Method other than GET is not allowed | | 50X  | Server errors  | Technical error with servers| Each error response (except `401 Unauthorized` error) contains the code of the error, the title of the error and detailed description of the error: a misprint in an endpoint, wrong URL parameter, etc. The example of the error message is shown below:  ```json \"error\": {   \"status\": 404,   \"title\": \"Resource couldn't be found\",   \"details\": \"There is no information in WoS Journals API about the identifier ABC_DEF for the Journals content area. Sorry :(\" } ``` For the `401 Unauthorized` error the response body is a little bit different: ```json {   \"error_description\": \"The access token is missing\",   \"error\": \"invalid_request\" } ```
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CategoriesCited from '../model/CategoriesCited';
import CategoriesCiting from '../model/CategoriesCiting';
import CategoryList from '../model/CategoryList';
import CategoryRecord from '../model/CategoryRecord';
import CategoryReports from '../model/CategoryReports';

/**
* Categories service.
* @module api/CategoriesApi
* @version 1.0.0
*/
export default class CategoriesApi {

    /**
    * Constructs a new CategoriesApi. 
    * @alias module:api/CategoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the categoriesGet operation.
     * @callback module:api/CategoriesApi~categoriesGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search and filter across the journal categories
     * The endpoint allows to search, filter, or browse across the Categories content.  The endpoint doesn't require any parameter to return results, although only main information for the first ten records sorted alphabetically will be retrieved.  To get comprehensive results, a set of parameters could be applied: - `q`: Category name - `edition`: filter by category edition - `jcrYear`: filter by Category Report Year (since 203) - `limit`: set the limit of records on the page (1-50) - `page`: set the result page  By default, all the responses are sorted alphabetically, only in case of search the results will be sorted by relevance.  The response contains: - Main information about the number of records found, page and limit - Category unique ID (based on category code and edition) - API Link to Category record - Category title - Search matches with the found phrase ***&lt;em&gt;*** *highlighted* ***&lt;/em&gt;*** - only if parameter `q` is requested - Edition information - only if the parameter `edition` is requested - Link to the Category Report - only if parameter `jcrYear` is requested
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Free-text search by category name.  Search logic is described in the section [Search](#search).
     * @param {String} opts.edition Filter by Web of Sceince Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded (ournals across more than 170 disciplines) - SSCI - Social Sciences Citation Index (journals across more than 50 social science disciplines)  Multiple values are allowed, separated by semicolon ( **;** )
     * @param {Number} opts.jcrYear Filter by Category Citation Report year (from 2003).  Only one value is allowed.
     * @param {Number} opts.page Specifying a page to retrieve (default to 1)
     * @param {Number} opts.limit Number of returned results, ranging from 0 to 50 (default to 10)
     * @param {module:api/CategoriesApi~categoriesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryList}
     */
    categoriesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'edition': opts['edition'],
        'jcrYear': opts['jcrYear'],
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryList;
      return this.apiClient.callApi(
        '/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoriesIdCitedYearYearGet operation.
     * @callback module:api/CategoriesApi~categoriesIdCitedYearYearGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoriesCited} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journals that cite all journals in the category for the JCR year
     * The Cited Subject Category table lists journals that cite other journals in the subject category.  Category Cited data contains:  - Citing **Journal** with the link to WoS Journal API entity.<br /> Citing journals are sorted in descending order. At the top is the journal with the largest number of citations to the subject category. - **Cited journals**: The number of journals in the subject category. - **Cited year (all)**:  The total number of citations from the citing journal. This total includes the number shown under each year and the number in the \"Rest\". - **Cited Year (10-year interval)**: The publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the ten-year period defined. For example, if the cited years are 2013-2004, the Rest number will show the number of citations from the citing journal in 2012 to articles published in 2003 and earlier in journals in the subject category.     Numbers in the \"All Journals\" are sums of the numbers for each year. \"All others\" refers to citing journals not listed by name.    For detailed information, please visit [this page](http://jcr.help.clarivate.com/Content/cited-category-data.htm)
     * @param {String} id Category ID
     * @param {Number} year JCR Year (from 2003)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Specifying a page to retrieve (default to 1)
     * @param {Number} opts.limit Number of returned results, ranging from 0 to 50 (default to 10)
     * @param {module:api/CategoriesApi~categoriesIdCitedYearYearGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoriesCited}
     */
    categoriesIdCitedYearYearGet(id, year, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling categoriesIdCitedYearYearGet");
      }
      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling categoriesIdCitedYearYearGet");
      }

      let pathParams = {
        'id': id,
        'year': year
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoriesCited;
      return this.apiClient.callApi(
        '/categories/{id}/cited/year/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoriesIdCitingYearYearGet operation.
     * @callback module:api/CategoriesApi~categoriesIdCitingYearYearGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoriesCiting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journals that were cited by all journals from the category for the JCR year
     * Category Citing data contains:  - Cited **Journal** with the link to WoS Journal API entity.<br /> Cited journals are sorted in descending order. At the top is the journal with the largest number of citations to the subject category. - **Citing journals**: The number of journals in the subject category. - **Cited year (all)**:  The total number of citations to the citing journal. This total includes the number shown under each year and the number in the \"Rest\". - **Cited Year (10-year interval)**: The publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the ten-year period defined. For example, if the cited years are 2013-2004, the Rest number will show the number of citations from the citing journal in 2012 to articles published in 2003 and earlier in journals in the subject category.     Numbers in the \"All Journals\" are sums of the numbers for each year. \"All others\" refers to citing journals not listed by name.    For detailed information, please visit [this page](http://jcr.help.clarivate.com/Content/citing-category-data.htm)
     * @param {String} id Category ID
     * @param {Number} year JCR Year (from 2003)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Specifying a page to retrieve (default to 1)
     * @param {Number} opts.limit Number of returned results, ranging from 0 to 50 (default to 10)
     * @param {module:api/CategoriesApi~categoriesIdCitingYearYearGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoriesCiting}
     */
    categoriesIdCitingYearYearGet(id, year, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling categoriesIdCitingYearYearGet");
      }
      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling categoriesIdCitingYearYearGet");
      }

      let pathParams = {
        'id': id,
        'year': year
      };
      let queryParams = {
        'page': opts['page'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoriesCiting;
      return this.apiClient.callApi(
        '/categories/{id}/citing/year/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoriesIdGet operation.
     * @callback module:api/CategoriesApi~categoriesIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryRecord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a category
     * The category profile provides a comprehensive overview, beginning in 2003, for each of more than 230 different subject categories in the JCR.  Information contain the name, description and links to each JCR Category Year Report (starting from 2003)
     * @param {String} id Category ID, consisting of a two-letter category code and four-letter edition, separated by **_** (i.e., ***RZ_SSCI*** or ***IP_SCIE***)
     * @param {module:api/CategoriesApi~categoriesIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryRecord}
     */
    categoriesIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling categoriesIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryRecord;
      return this.apiClient.callApi(
        '/categories/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the categoriesIdReportsYearYearGet operation.
     * @callback module:api/CategoriesApi~categoriesIdReportsYearYearGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryReports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get category metrics for a year
     * For each JCR year all metrics related to a subject category in the Journal Citation Record are available, including: number of journals and articles in the category, Total Cites, Median Impact Factor, Aggregate Impact Factor, Aggregate Immediacy Index, and Cited and Citing category half-life.  Please find detailed information about the metrics in the Journals by JCR Year Report output
     * @param {String} id Category ID
     * @param {Number} year Category report year
     * @param {module:api/CategoriesApi~categoriesIdReportsYearYearGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CategoryReports}
     */
    categoriesIdReportsYearYearGet(id, year, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling categoriesIdReportsYearYearGet");
      }
      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling categoriesIdReportsYearYearGet");
      }

      let pathParams = {
        'id': id,
        'year': year
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryReports;
      return this.apiClient.callApi(
        '/categories/{id}/reports/year/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
