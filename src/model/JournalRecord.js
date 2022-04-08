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
import OpenAccess from './OpenAccess';
import Publisher from './Publisher';

/**
 * The JournalRecord model module.
 * @module model/JournalRecord
 * @version 1.0.0
 */
class JournalRecord {
    /**
     * Constructs a new <code>JournalRecord</code>.
     * @alias module:model/JournalRecord
     */
    constructor() { 
        
        JournalRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JournalRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JournalRecord} obj Optional instance to populate.
     * @return {module:model/JournalRecord} The populated <code>JournalRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JournalRecord();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('jcrTitle')) {
                obj['jcrTitle'] = ApiClient.convertToType(data['jcrTitle'], 'String');
            }
            if (data.hasOwnProperty('isoTitle')) {
                obj['isoTitle'] = ApiClient.convertToType(data['isoTitle'], 'String');
            }
            if (data.hasOwnProperty('issn')) {
                obj['issn'] = ApiClient.convertToType(data['issn'], 'String');
            }
            if (data.hasOwnProperty('previousIssn')) {
                obj['previousIssn'] = ApiClient.convertToType(data['previousIssn'], ['String']);
            }
            if (data.hasOwnProperty('eIssn')) {
                obj['eIssn'] = ApiClient.convertToType(data['eIssn'], 'String');
            }
            if (data.hasOwnProperty('publisher')) {
                obj['publisher'] = Publisher.constructFromObject(data['publisher']);
            }
            if (data.hasOwnProperty('frequency')) {
                obj['frequency'] = ApiClient.convertToType(data['frequency'], 'Number');
            }
            if (data.hasOwnProperty('firstIssueYear')) {
                obj['firstIssueYear'] = ApiClient.convertToType(data['firstIssueYear'], 'Number');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = ApiClient.convertToType(data['language'], 'String');
            }
            if (data.hasOwnProperty('openAccess')) {
                obj['openAccess'] = OpenAccess.constructFromObject(data['openAccess']);
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], [Object]);
            }
            if (data.hasOwnProperty('journalCitationReports')) {
                obj['journalCitationReports'] = ApiClient.convertToType(data['journalCitationReports'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * Journal unique identifier
 * @member {String} id
 */
JournalRecord.prototype['id'] = undefined;

/**
 * Journal title
 * @member {String} name
 */
JournalRecord.prototype['name'] = undefined;

/**
 * Journal JCR abbreviation
 * @member {String} jcrTitle
 */
JournalRecord.prototype['jcrTitle'] = undefined;

/**
 * Journal title in [ISO format](https://www.issn.org/services/online-services/access-to-the-ltwa/)
 * @member {String} isoTitle
 */
JournalRecord.prototype['isoTitle'] = undefined;

/**
 * Current [ISSN identifier](https://www.issn.org/understanding-the-issn/what-is-an-issn/)
 * @member {String} issn
 */
JournalRecord.prototype['issn'] = undefined;

/**
 * Previously assignled ISSN identifiers
 * @member {Array.<String>} previousIssn
 */
JournalRecord.prototype['previousIssn'] = undefined;

/**
 * (For online journals) [Electronic ISSN](https://www.issn.org/understanding-the-issn/assignment-rules/the-issn-for-electronic-media/) identifier
 * @member {String} eIssn
 */
JournalRecord.prototype['eIssn'] = undefined;

/**
 * @member {module:model/Publisher} publisher
 */
JournalRecord.prototype['publisher'] = undefined;

/**
 * Number of times per year the journal is published
 * @member {Number} frequency
 */
JournalRecord.prototype['frequency'] = undefined;

/**
 * First year the journal was published
 * @member {Number} firstIssueYear
 */
JournalRecord.prototype['firstIssueYear'] = undefined;

/**
 * Journal publication language
 * @member {String} language
 */
JournalRecord.prototype['language'] = undefined;

/**
 * @member {module:model/OpenAccess} openAccess
 */
JournalRecord.prototype['openAccess'] = undefined;

/**
 * List of journal categories with related editions/databases
 * @member {Array.<Object>} categories
 */
JournalRecord.prototype['categories'] = undefined;

/**
 * List of all available Journal Citation Reports by year
 * @member {Array.<Object>} journalCitationReports
 */
JournalRecord.prototype['journalCitationReports'] = undefined;






export default JournalRecord;

