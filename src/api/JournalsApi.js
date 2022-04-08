/**
 * Web of Science™ Journals API
 * This API provides journal-level metadata and metrics for all journals in the Journal Citation Reports™ covered in the Web of Science Core Collection, including the Journal Impact Factor™ and other new metrics. Integrate journal data into your internal systems or retrieve journal indicators for bibliometrics studies.  ## Resources This API follows the REST approach to disclose resources in URL format. Only the GET method is currently available to perform requests over HTTP.  The API is available on the [Clarivate Developer Portal](https://developer.clarivate.com/apis/wos-journal). The access requires registration on the Portal and approval from the Clarivate Sales/Product teams to entitle to the API.  ## Credentials All requests require authentication with an API Key authentication flow. For more details, check the [Guide](https://developer.clarivate.com/help/api-access#key_access).  ## API Client Libraries The current languages/frameworks are supported: [Python](https://github.com/clarivate/wosjournals-python-client) | [Java](https://github.com/clarivate/wosjournals-java-client) | [Javascript](https://github.com/clarivate/wosjournals-javascript-client)  ## Content You can learn more about content at [Journal Citation Reports™ Product page](https://clarivate.com/webofsciencegroup/solutions/journal-citation-reports/), or in the [documentation](http://jcr.help.clarivate.com/Content/home.htm).  ## <a name=\"search\"></a> Search (query parameter `q=`) This API supports free-text search for a journal name, abbreviation, ISSN code, publisher, and Web of Science™ category name (only `/categories` endpoint). You need to provide a complete and valid ISSN code pattern; otherwise, the API will not look up for ISSN codes.  ### Boolean operators | Operator    | Description  | Example| |-----|-----|------------------| | + / \" \" | Search by two or more terms in the same field. Blank space is the same as an AND operator. The search retrieves all the records that contain the terms, e.g., | `/journals?q=matrix biology`<br> `/journals?q=nature+group` | | OR | Search by at least one term in the field. The search retrieves all the records that contain one of the terms, e.g., | `/journals?q=gas OR oil` | | NOT / - | Search by excluding specific terms. The search retrieves all the records that match the query specifics, e.g., | `/journals?q=genetics -nature` |  ### Special symbols The wildcards ( __*__ ) are allowed in the search that starts with the search query&#58; `/journals?q=nano*` will search indications that start from __nano__&#58; for example, _Nanotechnology_ or _nanotubes_.  Please note&#58; the free text search query (with the parameter `q=`) should contain at least three symbols.  ## Filtering The API supports several filters for Journals and Web of Science™ Categories, narrowing down the initial list of entities or search results.  There are two types of filters:  - Filter by one or multiple **values**: *edition*, *categoryCode*, *jcrYear*, *jifQuartile* - Filter by **range**: *jif*, *jifPercentile*, *jci*,   ### Filter by values The filter name goes before the equals sign, followed by one or multiple filter values, separated by a semicolon, like `categoryCode=RZ;RU`. You can combine various filters with or without the search. Filters are separated by an ampersand (**&amp;**): `q=nature&categoryCode=RU;KM&jcrYear=2018`  Please note&#58; filter by *jcrYear* allows only one year value as an input  ### <a name='range'></a> Filter by range The API supports range filtering for Journal Impact Factor (*jif*) or Journal Impact Factor Percentile (*jifPercentile*) with the following operators:  - ***eq*** (equal): if a Journal Impact Factor (Percentile) is equal to a specific number.<br /> For example: for `jif=eq:5.032` the result will include journals with Journal Impact Factor = 5.032.<br /> Not combinable with any other operator - ***gt*** (greater than): if a Journal Impact Factor (Percentile) is greater than a specific number.<br /> For example: for `jif=gt:5` the result will include journals with Journal Impact Factor = 5.001 and higher.<br /> Combinable with *lt* and *lte* operators - ***gte*** (greater than equal): if a Journal Impact Factor (Percentile) is greater than or equal to a specific number.<br /> For example: for `jif=gte:5` the result will include journals with Journal Impact Factor = 5.000 and higher.<br /> Combinable with *lt* and *lte* operators - ***lt*** (less than): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lt:5` the result will include journals with Journal Impact Factor = 4.999 and less.<br /> Combinable with *gt* and *gte* operators - ***lte*** (less than equal): if a Journal Impact Factor (Percentile) is less than a specific number.<br /> For example: for `jif=lte:5` the result will include journals with Journal Impact Factor = 5.000 and less.<br /> Combinable with *gt* and *gte* operators  Use `AND` to combine two operators, e.g.,`jifPercentile=gte:50 AND lte:80` responses with all journals in a percentile range from 50% to 80% (both included).  ## Pagination To ensure fast response time, each search or multiple entity calls (such as `/journals` or `/categories/ID/cited/year/YYYY`) retrieve only a certain number of hits/records.  There are two optional request parameters to browse along with the result&#58; _limit_ and _page_.  - limit&#58; Number of returned results, ranging from 0 to 50 (default **10**) - page&#58; Specifying a page to retrieve (default **1**)  Moreover, this information is shown in the response body, in the tag **metadata**&#58;  ```json \"metadata\": {   \"total\": 91,   \"page\": 1,   \"limit\": 10 } ``` ## Errors The WoS Journals API uses conventional HTTP success or failure status codes. For errors, some extra information is included to indicate what went wrong in the JSON response. The list of HTTP codes is listed below.  | Code  | Title  | Description | |---|---|---| | 400  | Bad request  | Request syntax error | | 401  | Unauthorized  | The API key is invalid or missed | | 404  | Not found  | The resource is not found | | 405 | Method not allowed | Method other than GET is not allowed | | 50X  | Server errors  | Technical error with servers| Each error response (except `401 Unauthorized` error) contains the code of the error, the title of the error and detailed description of the error: a misprint in an endpoint, wrong URL parameter, etc. The example of the error message is shown below:  ```json \"error\": {   \"status\": 404,   \"title\": \"Resource couldn't be found\",   \"details\": \"There is no information in WoS Journals API about the identifier ABC_DEF for the Journals content area. Sorry :(\" } ``` For the `401 Unauthorized` error the response body is a little bit different: ```json {   \"error_description\": \"The access token is missing\",   \"error\": \"invalid_request\" } ```
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
import JournalHistoryRecord from '../model/JournalHistoryRecord';
import JournalList from '../model/JournalList';
import JournalRecord from '../model/JournalRecord';
import JournalReports from '../model/JournalReports';
import JournalsCited from '../model/JournalsCited';
import JournalsCiting from '../model/JournalsCiting';

/**
* Journals service.
* @module api/JournalsApi
* @version 1.0.0
*/
export default class JournalsApi {

    /**
    * Constructs a new JournalsApi. 
    * @alias module:api/JournalsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the journalsGet operation.
     * @callback module:api/JournalsApi~journalsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search and filter across JCR Journals
     * The endpoint allows to search, filter, or browse across the Journals content.  The endpoint doesn't require any parameter to return results, although only main information for the first ten records sorted alphabetically will be retrieved.  To get comprehensive results, a set of parameters could be applied: - `q`: ISSN or title/publisher search - `edition`: filter by journal edition - `categoryCode`: filter by WoS journal category - `jcrYear`: filter by Journal Citation Report Year (since 1997) - `jif`: filter by Journal Impact Factor (JIF) - `jifPercentile`: filter by Journal Impact Factor Percentile (0-100) - `jifQuartile`: filter by Journal Impact Factor Rank Quartile - `jci`: filter by Journal Citation Indicator (JCI) - `limit`: set the limit of records on the page (1-50) - `page`: set the result page  By default, all the responses are sorted alphabetically, only in case of search the results will be sorted by relevance.  The response contains: - Main information about the number of records found, page and limit - Journals unique ID (based on JCR abbreviated title) - API Link to Journal record - Journal title - Search matches with the found phrase ***&lt;em&gt;*** *highlighted* ***&lt;/em&gt;*** - only if parameter `q` is requested - Category information (unique ID, category name, and edition) - only if the parameter `categoryCode` or `edition` is requested - Link to the Journal Citation Report - only if parameter `jcrYear` is requested - Metrics information (Impact metrics) - only if parameter `jif` or `jci` is requested - Metrics information (Source metrics) - only if parameter `jifPercentile` is requested - Ranks information (JIF rank and quartile within the category) - only if parameter `jifQuartile` is requested
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Free-text search by journal name (e.g. *Nature Genetics*), JCR abbreviation (e.g. *NAT GENET*), publisher (e.g. *PUBLIC LIBRARY SCIENCE*) or [ISSN / eISSN code](https://www.issn.org/understanding-the-issn/what-is-an-issn/) (e.g. *1061-4036*)  The search logic is described in the section [Search](#search).
     * @param {module:model/String} opts.edition Filter by Web of Science Citation Index. The following indexes (editions) are presented: - SCIE - Science Citation Index Expanded - SSCI - Social Sciences Citation Index - AHCI - Arts & Humanities Citation Index - ESCI - Emerging Sources Citation Index  Multiple values are allowed, separated by a semicolon ( **;** )
     * @param {String} opts.categoryCode Filter journals by category identifiers.  Each journal in JCR is assigned to at least one of the subject categories, indicating a general area of science or the social sciences. Journals may be included in more than one subject category.  Multiple values are allowed, separated by a semicolon ( **;** )
     * @param {Number} opts.jcrYear Filter by Journal Citation Report year (from 1997).  **NOTE:** The filter **jcrYear** is mandatory while using **jif**, **jifPercentile**, **jifQuartile**, and **jci** filters  Only one value is allowed.
     * @param {String} opts.jif Filter by [Journal Impact Factor](http://jcr.help.clarivate.com/Content/jcr3-glossary.htm) (JIF).  **NOTE:** The filter **jcrYear** is mandatory while using **jif** filter  Filter logic is described in the section [Filter by range](#range)
     * @param {String} opts.jifPercentile Filter by [Journal Impact Factor Percentile](http://jcr.help.clarivate.com/Content/glossary-journal-impact-factor-percentile.htm), ranging from 0 to 100  **NOTE:** The filter **jcrYear** is mandatory while using **jifPercentile** filter  Filter logic is described in the section [Filter by range](#range)
     * @param {module:model/String} opts.jifQuartile Filter by JIF quartile rank for a category, from highest to lowest based on their JIF value: <br />Q1 is represented by the top 25% of journals in the category; <br />Q2 is occupied by journals in the 25 to 50% group; <br />Q3 is occupied by journals in the 50 to 75% group; <br />Q4 is occupied by journals in the 75 to 100% group.  **NOTE:** The filter **jcrYear** is mandatory while using **jifQuartile** filter  Multiple values are allowed, separated by a semicolon ( **;** )
     * @param {String} opts.jci Filter by [Journal Citation Indicator](http://jcr.help.clarivate.com/Content/jcr3-glossary.htm) (JCI).  **NOTE:** The filter **jcrYear** is mandatory while using **jci** filter  Filter logic is described in the section [Filter by range](#range)
     * @param {module:model/String} opts.jciQuartile Filter by JCI quartile rank for a category, from highest to lowest based on their JCI value: Q1 is represented by the top 25% of journals in the category; Q2 is occupied by journals in the 25 to 50% group; Q3 is occupied by journals in the 50 to 75% group; Q4 is occupied by journals in the 75 to 100% group.  **NOTE:** The filter **jcrYear** is mandatory while using **jciQuartile** filter  Multiple values are allowed, separated by a semicolon ( **;** )
     * @param {String} opts.jciPercentile Filter by Journal Citation Indicator (JCI) percentile, ranging from 0 to 100  **NOTE:** The filter **jcrYear** is mandatory while using **jciPercentile** filter  Filter logic is described in the section [Filter by range](#range)
     * @param {Number} opts.page Specifying a page to retrieve (default to 1)
     * @param {Number} opts.limit Number of returned results, ranging from 0 to 50 (default to 10)
     * @param {module:api/JournalsApi~journalsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalList}
     */
    journalsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q'],
        'edition': opts['edition'],
        'categoryCode': opts['categoryCode'],
        'jcrYear': opts['jcrYear'],
        'jif': opts['jif'],
        'jifPercentile': opts['jifPercentile'],
        'jifQuartile': opts['jifQuartile'],
        'jci': opts['jci'],
        'jciQuartile': opts['jciQuartile'],
        'jciPercentile': opts['jciPercentile'],
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
      let returnType = JournalList;
      return this.apiClient.callApi(
        '/journals', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journalsIdCitedYearYearGet operation.
     * @callback module:api/JournalsApi~journalsIdCitedYearYearGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalsCited} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journals that cite the journal for the JCR year
     * Cited Journal data show how many citations a journal received in the JCR year. Cited journal data is relevant when analyzing metrics such as the Journal Impact Factor and Market Share.  The response contains:  - Citing **Journal** with the link to WoS Journal API entity - **Cited Year (all)**:  The total number of citations from the citing journal. This total includes the number shown under each year and the number in the Rest column. - **Cited Year (10 years interval)**: Publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the 10-year period defined by the table. For example, if the cited years shown are 2017-2008, the Rest column will show the number of citations from the citing journal in 2017 to articles published in the cited journal in 2007 and any earlier year.   Please see the detailed infomration in the [JCR Help page](http://jcr.help.clarivate.com/Content/cited-journal-data.htm)
     * @param {String} id Journal unique identifier
     * @param {Number} year Journal Citation Report Year (from 1997)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Specifying a page to retrieve (default to 1)
     * @param {Number} opts.limit Number of returned results, ranging from 0 to 50 (default to 10)
     * @param {module:api/JournalsApi~journalsIdCitedYearYearGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalsCited}
     */
    journalsIdCitedYearYearGet(id, year, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling journalsIdCitedYearYearGet");
      }
      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling journalsIdCitedYearYearGet");
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
      let returnType = JournalsCited;
      return this.apiClient.callApi(
        '/journals/{id}/cited/year/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journalsIdCitingYearYearGet operation.
     * @callback module:api/JournalsApi~journalsIdCitingYearYearGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalsCiting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journals that were cited by the journal for the JCR year
     * The response contains:  - Cited **Journal** with the link to WoS Journal API entity - **Cited Year (all)**:  The total number of citations to the cited journal. This total includes the number shown under each year and the number in the Rest column. - **Cited Year (10 years interval)**: Publication year of the cited articles. - **Cited Year (rest)**: All publication years of cited articles prior to the 10-year period defined by the table. For example, if the cited years shown are 2017-2008, the Rest column will show the number of citations from the citing journal in 2017 to articles published in the cited journal in 2007 and any earlier year.   Please see the detailed infomration in the [JCR Help page](http://jcr.help.clarivate.com/Content/citing-journal-data.htm)
     * @param {String} id An Journal ID
     * @param {Number} year A citing Year
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Specifying a page to retrieve (default to 1)
     * @param {Number} opts.limit Number of returned results, ranging from 0 to 50 (default to 10)
     * @param {module:api/JournalsApi~journalsIdCitingYearYearGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalsCiting}
     */
    journalsIdCitingYearYearGet(id, year, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling journalsIdCitingYearYearGet");
      }
      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling journalsIdCitingYearYearGet");
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
      let returnType = JournalsCiting;
      return this.apiClient.callApi(
        '/journals/{id}/citing/year/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journalsIdGet operation.
     * @callback module:api/JournalsApi~journalsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalRecord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journal by id
     * A journal entity contains: - basic bibliographic information about the journal, including publisher, ISSN and e-ISSN (where available), open access status, language, frequency of publication, and Web of Science categorization. - links to the multi-year Journal Citation Report data, starting from 1997.  For more information about Journal inclusion in the index, please visit [this page](http://jcr.help.clarivate.com/Content/scope-notes.htm)
     * @param {String} id Journal unique identifier  Currently an identifier is a JCR abbreviation, where blank spaces are substituted with underscores (e.g. *PLOS ONE* Journal has the ID **PLOS_ONE**)
     * @param {module:api/JournalsApi~journalsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalRecord}
     */
    journalsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling journalsIdGet");
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
      let returnType = JournalRecord;
      return this.apiClient.callApi(
        '/journals/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journalsIdHistoryGet operation.
     * @callback module:api/JournalsApi~journalsIdHistoryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalHistoryRecord} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journal history by id
     * TBD
     * @param {String} id Journal unique identifier  Currently an identifier is a JCR abbreviation, where blank spaces are substituted with underscores (e.g. *PLOS ONE* Journal has the ID **PLOS_ONE**)
     * @param {module:api/JournalsApi~journalsIdHistoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalHistoryRecord}
     */
    journalsIdHistoryGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling journalsIdHistoryGet");
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
      let returnType = JournalHistoryRecord;
      return this.apiClient.callApi(
        '/journals/{id}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the journalsIdReportsYearYearGet operation.
     * @callback module:api/JournalsApi~journalsIdReportsYearYearGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JournalReports} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get journal metrics for a year
     * This endpoint returns the information about Journal Citation Report by year.  The response contains: - Journal name and link to the Journal entry - Key indications (metrics): impact, source and influence - Journal Impact Factor and ESI citations ranks - Journal Source Data - Three-year content analysis by country/region and organization - Links to the related Cited/Citing reports
     * @param {String} id Journal unique identifier  Currently an identifier is a JCR abbreviation, where blank spaces are substituted with underscores (e.g. *PLOS ONE* Journal has the ID **PLOS_ONE**)
     * @param {Number} year Journal Citation Report year (jcrYear)
     * @param {module:api/JournalsApi~journalsIdReportsYearYearGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JournalReports}
     */
    journalsIdReportsYearYearGet(id, year, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling journalsIdReportsYearYearGet");
      }
      // verify the required parameter 'year' is set
      if (year === undefined || year === null) {
        throw new Error("Missing the required parameter 'year' when calling journalsIdReportsYearYearGet");
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
      let returnType = JournalReports;
      return this.apiClient.callApi(
        '/journals/{id}/reports/year/{year}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
