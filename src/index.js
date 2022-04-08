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


import ApiClient from './ApiClient';
import CategoriesCited from './model/CategoriesCited';
import CategoriesCitedHits from './model/CategoriesCitedHits';
import CategoriesCitedJournal from './model/CategoriesCitedJournal';
import CategoriesCiting from './model/CategoriesCiting';
import CategoriesCitingHits from './model/CategoriesCitingHits';
import CategoriesCitingJournal from './model/CategoriesCitingJournal';
import CategoryData from './model/CategoryData';
import CategoryList from './model/CategoryList';
import CategoryListRecord from './model/CategoryListRecord';
import CategoryRecord from './model/CategoryRecord';
import CategoryReports from './model/CategoryReports';
import CategoryReportsJournals from './model/CategoryReportsJournals';
import CategoryReportsSourceData from './model/CategoryReportsSourceData';
import CategoryReportsSourceDataArticles from './model/CategoryReportsSourceDataArticles';
import CategoryReportsSourceDataReviews from './model/CategoryReportsSourceDataReviews';
import CitedData from './model/CitedData';
import CitingData from './model/CitingData';
import Frequency from './model/Frequency';
import HalfLife from './model/HalfLife';
import Immediacy from './model/Immediacy';
import ImpactMetrics from './model/ImpactMetrics';
import InfluenceMetrics from './model/InfluenceMetrics';
import InfluenceMetricsEigenFactor from './model/InfluenceMetricsEigenFactor';
import Jif from './model/Jif';
import JifAggregate from './model/JifAggregate';
import JournalData from './model/JournalData';
import JournalHistoryRecord from './model/JournalHistoryRecord';
import JournalHistoryRecordIsoTitle from './model/JournalHistoryRecordIsoTitle';
import JournalHistoryRecordIssn from './model/JournalHistoryRecordIssn';
import JournalHistoryRecordName from './model/JournalHistoryRecordName';
import JournalHistoryRecordPublisher from './model/JournalHistoryRecordPublisher';
import JournalHistoryRecordPublisher1 from './model/JournalHistoryRecordPublisher1';
import JournalHistoryRecordYear from './model/JournalHistoryRecordYear';
import JournalHistoryRecordYear1 from './model/JournalHistoryRecordYear1';
import JournalHistoryRecordYear2 from './model/JournalHistoryRecordYear2';
import JournalHistoryRecordYear3 from './model/JournalHistoryRecordYear3';
import JournalList from './model/JournalList';
import JournalListRecord from './model/JournalListRecord';
import JournalListRecordJournalCitationReports from './model/JournalListRecordJournalCitationReports';
import JournalListRecordMetrics from './model/JournalListRecordMetrics';
import JournalListRecordMetricsImpactMetrics from './model/JournalListRecordMetricsImpactMetrics';
import JournalListRecordMetricsSourceMetrics from './model/JournalListRecordMetricsSourceMetrics';
import JournalListRecordRanks from './model/JournalListRecordRanks';
import JournalListRecordRanksJci from './model/JournalListRecordRanksJci';
import JournalListRecordRanksJif from './model/JournalListRecordRanksJif';
import JournalProfile from './model/JournalProfile';
import JournalProfileCitableItems from './model/JournalProfileCitableItems';
import JournalProfileCitations from './model/JournalProfileCitations';
import JournalProfileOccurrenceCountries from './model/JournalProfileOccurrenceCountries';
import JournalProfileOccurrenceOrganizations from './model/JournalProfileOccurrenceOrganizations';
import JournalRecord from './model/JournalRecord';
import JournalReports from './model/JournalReports';
import JournalReportsJournal from './model/JournalReportsJournal';
import JournalReportsMetrics from './model/JournalReportsMetrics';
import JournalsCited from './model/JournalsCited';
import JournalsCitedHits from './model/JournalsCitedHits';
import JournalsCitesJournal from './model/JournalsCitesJournal';
import JournalsCiting from './model/JournalsCiting';
import JournalsCitingHits from './model/JournalsCitingHits';
import Metadata from './model/Metadata';
import OpenAccess from './model/OpenAccess';
import Publisher from './model/Publisher';
import RankQuartileData from './model/RankQuartileData';
import Ranks from './model/Ranks';
import RanksEsiCitations from './model/RanksEsiCitations';
import RanksJif from './model/RanksJif';
import SearchMatch from './model/SearchMatch';
import SourceData from './model/SourceData';
import SourceDataArticles from './model/SourceDataArticles';
import SourceMetrics from './model/SourceMetrics';
import SourceMetricsCitableItems from './model/SourceMetricsCitableItems';
import CategoriesApi from './api/CategoriesApi';
import JournalsApi from './api/JournalsApi';


/**
* This_API_provides_journal_level_metadata_and_metrics_for_all_journals_in_the_Journal_Citation_Reports_covered_in_the_Web_of_Science_Core_Collection_including_the_Journal_Impact_Factor_and_other_new_metrics__Integrate_journal_data_into_your_internal_systems_or_retrieve_journal_indicators_for_bibliometrics_studies__ResourcesThis_API_follows_the_REST_approach_to_disclose_resources_in_URL_format__Only_the_GET_method_is_currently_available_to_perform_requests_over_HTTP_The_API_is_available_on_the__Clarivate_Developer_Portal_https__developer_clarivate_com_apis_wos_journal__The_access_requires_registration_on_the_Portal_and_approval_from_the_Clarivate_Sales_Product_teams_to_entitle_to_the_API__CredentialsAll_requests_require_authentication_with_an_API_Key_authentication_flow__For_more_details_check_the__Guide_https__developer_clarivate_com_help_api_accesskey_access__API_Client_LibrariesThe_current_languages_frameworks_are_supported__Python_https__github_com_clarivate_wosjournals_python_client____Java_https__github_com_clarivate_wosjournals_java_client____Javascript_https__github_com_clarivate_wosjournals_javascript_client_ContentYou_can_learn_more_about_content_at__Journal_Citation_Reports_Product_page_https__clarivate_com_webofsciencegroup_solutions_journal_citation_reports__or_in_the__documentation_http__jcr_help_clarivate_com_Content_home_htm__a_namesearch_a_Search__query_parameter_qThis_API_supports_free_text_search_for_a_journal_name_abbreviation_ISSN_code_publisher_and_Web_of_Science_category_name__only__categories_endpoint__You_need_to_provide_a_complete_and_valid_ISSN_code_pattern_otherwise_the_API_will_not_look_up_for_ISSN_codes__Boolean_operators__Operator______Description____Example__________________________________________Search_by_two_or_more_terms_in_the_same_field__Blank_space_is_the_same_as_an_AND_operator__The_search_retrieves_all_the_records_that_contain_the_terms_e_g_____journalsqmatrix_biologybr__journalsqnaturegroup____OR___Search_by_at_least_one_term_in_the_field__The_search_retrieves_all_the_records_that_contain_one_of_the_terms_e_g_____journalsqgas_OR_oil____NOT_______Search_by_excluding_specific_terms__The_search_retrieves_all_the_records_that_match_the_query_specifics_e_g_____journalsqgenetics__nature___Special_symbolsThe_wildcards_________are_allowed_in_the_search_that_starts_with_the_search_query58__journalsqnano_will_search_indications_that_start_from___nano__58_for_example__Nanotechnology__or__nanotubes__Please_note58_the_free_text_search_query__with_the_parameter_q_should_contain_at_least_three_symbols__FilteringThe_API_supports_several_filters_for_Journals_and_Web_of_Science_Categories_narrowing_down_the_initial_list_of_entities_or_search_results_There_are_two_types_of_filters__Filter_by_one_or_multiple_values_edition_categoryCode_jcrYear_jifQuartile__Filter_by_range_jif_jifPercentile_jci__Filter_by_valuesThe_filter_name_goes_before_the_equals_sign_followed_by_one_or_multiple_filter_values_separated_by_a_semicolon_like_categoryCodeRZRU__You_can_combine_various_filters_with_or_without_the_search__Filters_are_separated_by_an_ampersand__amp_qnaturecategoryCodeRUKMjcrYear2018Please_note58_filter_by_jcrYear_allows_only_one_year_value_as_an_input_a_namerange_a_Filter_by_rangeThe_API_supports_range_filtering_for_Journal_Impact_Factor__jif_or_Journal_Impact_Factor_Percentile__jifPercentile_with_the_following_operators__eq__equal_if_a_Journal_Impact_Factor__Percentile_is_equal_to_a_specific_number_br___For_example_for_jifeq5_032_the_result_will_include_journals_with_Journal_Impact_Factor__5_032_br___Not_combinable_with_any_other_operator__gt__greater_than_if_a_Journal_Impact_Factor__Percentile_is_greater_than_a_specific_number_br___For_example_for_jifgt5_the_result_will_include_journals_with_Journal_Impact_Factor__5_001_and_higher_br___Combinable_with_lt_and_lte_operators__gte__greater_than_equal_if_a_Journal_Impact_Factor__Percentile_is_greater_than_or_equal_to_a_specific_number_br___For_example_for_jifgte5_the_result_will_include_journals_with_Journal_Impact_Factor__5_000_and_higher_br___Combinable_with_lt_and_lte_operators__lt__less_than_if_a_Journal_Impact_Factor__Percentile_is_less_than_a_specific_number_br___For_example_for_jiflt5_the_result_will_include_journals_with_Journal_Impact_Factor__4_999_and_less_br___Combinable_with_gt_and_gte_operators__lte__less_than_equal_if_a_Journal_Impact_Factor__Percentile_is_less_than_a_specific_number_br___For_example_for_jiflte5_the_result_will_include_journals_with_Journal_Impact_Factor__5_000_and_less_br___Combinable_with_gt_and_gte_operatorsUse_AND_to_combine_two_operators_e_g_jifPercentilegte50_AND_lte80_responses_with_all_journals_in_a_percentile_range_from_50_to_80__both_included__PaginationTo_ensure_fast_response_time_each_search_or_multiple_entity_calls__such_as__journals_or__categories_ID_cited_year_YYYY_retrieve_only_a_certain_number_of_hits_records_There_are_two_optional_request_parameters_to_browse_along_with_the_result58__limit__and__page____limit58_Number_of_returned_results_ranging_from_0_to_50__default_10__page58_Specifying_a_page_to_retrieve__default_1Moreover_this_information_is_shown_in_the_response_body_in_the_tag_metadata58jsonmetadata___total_91__page_1__limit_10_ErrorsThe_WoS_Journals_API_uses_conventional_HTTP_success_or_failure_status_codes__For_errors_some_extra_information_is_included_to_indicate_what_went_wrong_in_the_JSON_response__The_list_of_HTTP_codes_is_listed_below___Code____Title____Description_________________400____Bad_request____Request_syntax_error____401____Unauthorized____The_API_key_is_invalid_or_missed____404____Not_found____The_resource_is_not_found____405___Method_not_allowed___Method_other_than_GET_is_not_allowed____50X____Server_errors____Technical_error_with_servers_Each_error_response__except_401_Unauthorized_error_contains_the_code_of_the_error_the_title_of_the_error_and_detailed_description_of_the_error_a_misprint_in_an_endpoint_wrong_URL_parameter_etc__The_example_of_the_error_message_is_shown_belowjsonerror___status_404__title_Resource_couldnt_be_found__details_There_is_no_information_in_WoS_Journals_API_about_the_identifier_ABC_DEF_for_the_Journals_content_area__Sorry__For_the_401_Unauthorized_error_the_response_body_is_a_little_bit_differentjson__error_description_The_access_token_is_missing__error_invalid_request.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var ClarivateWosJournalsJsClient = require('index'); // See note below*.
* var xxxSvc = new ClarivateWosJournalsJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new ClarivateWosJournalsJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new ClarivateWosJournalsJsClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new ClarivateWosJournalsJsClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The CategoriesCited model constructor.
     * @property {module:model/CategoriesCited}
     */
    CategoriesCited,

    /**
     * The CategoriesCitedHits model constructor.
     * @property {module:model/CategoriesCitedHits}
     */
    CategoriesCitedHits,

    /**
     * The CategoriesCitedJournal model constructor.
     * @property {module:model/CategoriesCitedJournal}
     */
    CategoriesCitedJournal,

    /**
     * The CategoriesCiting model constructor.
     * @property {module:model/CategoriesCiting}
     */
    CategoriesCiting,

    /**
     * The CategoriesCitingHits model constructor.
     * @property {module:model/CategoriesCitingHits}
     */
    CategoriesCitingHits,

    /**
     * The CategoriesCitingJournal model constructor.
     * @property {module:model/CategoriesCitingJournal}
     */
    CategoriesCitingJournal,

    /**
     * The CategoryData model constructor.
     * @property {module:model/CategoryData}
     */
    CategoryData,

    /**
     * The CategoryList model constructor.
     * @property {module:model/CategoryList}
     */
    CategoryList,

    /**
     * The CategoryListRecord model constructor.
     * @property {module:model/CategoryListRecord}
     */
    CategoryListRecord,

    /**
     * The CategoryRecord model constructor.
     * @property {module:model/CategoryRecord}
     */
    CategoryRecord,

    /**
     * The CategoryReports model constructor.
     * @property {module:model/CategoryReports}
     */
    CategoryReports,

    /**
     * The CategoryReportsJournals model constructor.
     * @property {module:model/CategoryReportsJournals}
     */
    CategoryReportsJournals,

    /**
     * The CategoryReportsSourceData model constructor.
     * @property {module:model/CategoryReportsSourceData}
     */
    CategoryReportsSourceData,

    /**
     * The CategoryReportsSourceDataArticles model constructor.
     * @property {module:model/CategoryReportsSourceDataArticles}
     */
    CategoryReportsSourceDataArticles,

    /**
     * The CategoryReportsSourceDataReviews model constructor.
     * @property {module:model/CategoryReportsSourceDataReviews}
     */
    CategoryReportsSourceDataReviews,

    /**
     * The CitedData model constructor.
     * @property {module:model/CitedData}
     */
    CitedData,

    /**
     * The CitingData model constructor.
     * @property {module:model/CitingData}
     */
    CitingData,

    /**
     * The Frequency model constructor.
     * @property {module:model/Frequency}
     */
    Frequency,

    /**
     * The HalfLife model constructor.
     * @property {module:model/HalfLife}
     */
    HalfLife,

    /**
     * The Immediacy model constructor.
     * @property {module:model/Immediacy}
     */
    Immediacy,

    /**
     * The ImpactMetrics model constructor.
     * @property {module:model/ImpactMetrics}
     */
    ImpactMetrics,

    /**
     * The InfluenceMetrics model constructor.
     * @property {module:model/InfluenceMetrics}
     */
    InfluenceMetrics,

    /**
     * The InfluenceMetricsEigenFactor model constructor.
     * @property {module:model/InfluenceMetricsEigenFactor}
     */
    InfluenceMetricsEigenFactor,

    /**
     * The Jif model constructor.
     * @property {module:model/Jif}
     */
    Jif,

    /**
     * The JifAggregate model constructor.
     * @property {module:model/JifAggregate}
     */
    JifAggregate,

    /**
     * The JournalData model constructor.
     * @property {module:model/JournalData}
     */
    JournalData,

    /**
     * The JournalHistoryRecord model constructor.
     * @property {module:model/JournalHistoryRecord}
     */
    JournalHistoryRecord,

    /**
     * The JournalHistoryRecordIsoTitle model constructor.
     * @property {module:model/JournalHistoryRecordIsoTitle}
     */
    JournalHistoryRecordIsoTitle,

    /**
     * The JournalHistoryRecordIssn model constructor.
     * @property {module:model/JournalHistoryRecordIssn}
     */
    JournalHistoryRecordIssn,

    /**
     * The JournalHistoryRecordName model constructor.
     * @property {module:model/JournalHistoryRecordName}
     */
    JournalHistoryRecordName,

    /**
     * The JournalHistoryRecordPublisher model constructor.
     * @property {module:model/JournalHistoryRecordPublisher}
     */
    JournalHistoryRecordPublisher,

    /**
     * The JournalHistoryRecordPublisher1 model constructor.
     * @property {module:model/JournalHistoryRecordPublisher1}
     */
    JournalHistoryRecordPublisher1,

    /**
     * The JournalHistoryRecordYear model constructor.
     * @property {module:model/JournalHistoryRecordYear}
     */
    JournalHistoryRecordYear,

    /**
     * The JournalHistoryRecordYear1 model constructor.
     * @property {module:model/JournalHistoryRecordYear1}
     */
    JournalHistoryRecordYear1,

    /**
     * The JournalHistoryRecordYear2 model constructor.
     * @property {module:model/JournalHistoryRecordYear2}
     */
    JournalHistoryRecordYear2,

    /**
     * The JournalHistoryRecordYear3 model constructor.
     * @property {module:model/JournalHistoryRecordYear3}
     */
    JournalHistoryRecordYear3,

    /**
     * The JournalList model constructor.
     * @property {module:model/JournalList}
     */
    JournalList,

    /**
     * The JournalListRecord model constructor.
     * @property {module:model/JournalListRecord}
     */
    JournalListRecord,

    /**
     * The JournalListRecordJournalCitationReports model constructor.
     * @property {module:model/JournalListRecordJournalCitationReports}
     */
    JournalListRecordJournalCitationReports,

    /**
     * The JournalListRecordMetrics model constructor.
     * @property {module:model/JournalListRecordMetrics}
     */
    JournalListRecordMetrics,

    /**
     * The JournalListRecordMetricsImpactMetrics model constructor.
     * @property {module:model/JournalListRecordMetricsImpactMetrics}
     */
    JournalListRecordMetricsImpactMetrics,

    /**
     * The JournalListRecordMetricsSourceMetrics model constructor.
     * @property {module:model/JournalListRecordMetricsSourceMetrics}
     */
    JournalListRecordMetricsSourceMetrics,

    /**
     * The JournalListRecordRanks model constructor.
     * @property {module:model/JournalListRecordRanks}
     */
    JournalListRecordRanks,

    /**
     * The JournalListRecordRanksJci model constructor.
     * @property {module:model/JournalListRecordRanksJci}
     */
    JournalListRecordRanksJci,

    /**
     * The JournalListRecordRanksJif model constructor.
     * @property {module:model/JournalListRecordRanksJif}
     */
    JournalListRecordRanksJif,

    /**
     * The JournalProfile model constructor.
     * @property {module:model/JournalProfile}
     */
    JournalProfile,

    /**
     * The JournalProfileCitableItems model constructor.
     * @property {module:model/JournalProfileCitableItems}
     */
    JournalProfileCitableItems,

    /**
     * The JournalProfileCitations model constructor.
     * @property {module:model/JournalProfileCitations}
     */
    JournalProfileCitations,

    /**
     * The JournalProfileOccurrenceCountries model constructor.
     * @property {module:model/JournalProfileOccurrenceCountries}
     */
    JournalProfileOccurrenceCountries,

    /**
     * The JournalProfileOccurrenceOrganizations model constructor.
     * @property {module:model/JournalProfileOccurrenceOrganizations}
     */
    JournalProfileOccurrenceOrganizations,

    /**
     * The JournalRecord model constructor.
     * @property {module:model/JournalRecord}
     */
    JournalRecord,

    /**
     * The JournalReports model constructor.
     * @property {module:model/JournalReports}
     */
    JournalReports,

    /**
     * The JournalReportsJournal model constructor.
     * @property {module:model/JournalReportsJournal}
     */
    JournalReportsJournal,

    /**
     * The JournalReportsMetrics model constructor.
     * @property {module:model/JournalReportsMetrics}
     */
    JournalReportsMetrics,

    /**
     * The JournalsCited model constructor.
     * @property {module:model/JournalsCited}
     */
    JournalsCited,

    /**
     * The JournalsCitedHits model constructor.
     * @property {module:model/JournalsCitedHits}
     */
    JournalsCitedHits,

    /**
     * The JournalsCitesJournal model constructor.
     * @property {module:model/JournalsCitesJournal}
     */
    JournalsCitesJournal,

    /**
     * The JournalsCiting model constructor.
     * @property {module:model/JournalsCiting}
     */
    JournalsCiting,

    /**
     * The JournalsCitingHits model constructor.
     * @property {module:model/JournalsCitingHits}
     */
    JournalsCitingHits,

    /**
     * The Metadata model constructor.
     * @property {module:model/Metadata}
     */
    Metadata,

    /**
     * The OpenAccess model constructor.
     * @property {module:model/OpenAccess}
     */
    OpenAccess,

    /**
     * The Publisher model constructor.
     * @property {module:model/Publisher}
     */
    Publisher,

    /**
     * The RankQuartileData model constructor.
     * @property {module:model/RankQuartileData}
     */
    RankQuartileData,

    /**
     * The Ranks model constructor.
     * @property {module:model/Ranks}
     */
    Ranks,

    /**
     * The RanksEsiCitations model constructor.
     * @property {module:model/RanksEsiCitations}
     */
    RanksEsiCitations,

    /**
     * The RanksJif model constructor.
     * @property {module:model/RanksJif}
     */
    RanksJif,

    /**
     * The SearchMatch model constructor.
     * @property {module:model/SearchMatch}
     */
    SearchMatch,

    /**
     * The SourceData model constructor.
     * @property {module:model/SourceData}
     */
    SourceData,

    /**
     * The SourceDataArticles model constructor.
     * @property {module:model/SourceDataArticles}
     */
    SourceDataArticles,

    /**
     * The SourceMetrics model constructor.
     * @property {module:model/SourceMetrics}
     */
    SourceMetrics,

    /**
     * The SourceMetricsCitableItems model constructor.
     * @property {module:model/SourceMetricsCitableItems}
     */
    SourceMetricsCitableItems,

    /**
    * The CategoriesApi service constructor.
    * @property {module:api/CategoriesApi}
    */
    CategoriesApi,

    /**
    * The JournalsApi service constructor.
    * @property {module:api/JournalsApi}
    */
    JournalsApi
};
