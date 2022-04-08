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

import ApiClient from '../ApiClient';

/**
 * The Frequency model module.
 * @module model/Frequency
 * @version 1.0.0
 */
class Frequency {
    /**
     * Constructs a new <code>Frequency</code>.
     * Number of journals in the category according to the number of times per year published
     * @alias module:model/Frequency
     */
    constructor() { 
        
        Frequency.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Frequency</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Frequency} obj Optional instance to populate.
     * @return {module:model/Frequency} The populated <code>Frequency</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Frequency();

            if (data.hasOwnProperty('annual')) {
                obj['annual'] = ApiClient.convertToType(data['annual'], 'Number');
            }
            if (data.hasOwnProperty('hemiannual')) {
                obj['hemiannual'] = ApiClient.convertToType(data['hemiannual'], 'Number');
            }
            if (data.hasOwnProperty('triannual')) {
                obj['triannual'] = ApiClient.convertToType(data['triannual'], 'Number');
            }
            if (data.hasOwnProperty('semiannual')) {
                obj['semiannual'] = ApiClient.convertToType(data['semiannual'], 'Number');
            }
            if (data.hasOwnProperty('quarterly')) {
                obj['quarterly'] = ApiClient.convertToType(data['quarterly'], 'Number');
            }
            if (data.hasOwnProperty('bimonthly')) {
                obj['bimonthly'] = ApiClient.convertToType(data['bimonthly'], 'Number');
            }
            if (data.hasOwnProperty('monthly')) {
                obj['monthly'] = ApiClient.convertToType(data['monthly'], 'Number');
            }
            if (data.hasOwnProperty('biweekly')) {
                obj['biweekly'] = ApiClient.convertToType(data['biweekly'], 'Number');
            }
            if (data.hasOwnProperty('weekly')) {
                obj['weekly'] = ApiClient.convertToType(data['weekly'], 'Number');
            }
            if (data.hasOwnProperty('daily')) {
                obj['daily'] = ApiClient.convertToType(data['daily'], 'Number');
            }
            if (data.hasOwnProperty('irregular')) {
                obj['irregular'] = ApiClient.convertToType(data['irregular'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} annual
 */
Frequency.prototype['annual'] = undefined;

/**
 * @member {Number} hemiannual
 */
Frequency.prototype['hemiannual'] = undefined;

/**
 * @member {Number} triannual
 */
Frequency.prototype['triannual'] = undefined;

/**
 * @member {Number} semiannual
 */
Frequency.prototype['semiannual'] = undefined;

/**
 * @member {Number} quarterly
 */
Frequency.prototype['quarterly'] = undefined;

/**
 * @member {Number} bimonthly
 */
Frequency.prototype['bimonthly'] = undefined;

/**
 * @member {Number} monthly
 */
Frequency.prototype['monthly'] = undefined;

/**
 * @member {Number} biweekly
 */
Frequency.prototype['biweekly'] = undefined;

/**
 * @member {Number} weekly
 */
Frequency.prototype['weekly'] = undefined;

/**
 * @member {Number} daily
 */
Frequency.prototype['daily'] = undefined;

/**
 * @member {Number} irregular
 */
Frequency.prototype['irregular'] = undefined;






export default Frequency;

