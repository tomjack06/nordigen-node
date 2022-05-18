export default class RequisitionsApi {
    /**
     * Agreements api class
     * @param {Object} params
     * @param {NordigenClient} params.client
     */
    constructor({ client }: {
        client: NordigenClient;
    });
    /**
     * Create requisition. For creating links and retrieving accounts.
     * @param {Object} params
     * @param {string} params.redirectUrl application redirect url
     * @param {string} params.institutionId institution id
     * @param {string} [params.agreement] agreement id
     * @param {string} [params.userLanguage] to enforce a language for all end user steps hosted
                by Nordigen passed as a two-letter country code. Defaults to None
     * @param {string} params.reference additional layer of unique ID defined by yo
     * @returns Requisition object
    */
    createRequisition({ redirectUrl, institutionId, agreement, userLanguage, reference }: {
        redirectUrl: string;
        institutionId: string;
        agreement?: string;
        userLanguage?: string;
        reference: string;
    }): any;
    /**
     * Get all requisitions@param {Object} params
     * @param {Object} params
     * @param {number} [params.limit] number of results to return per page. Defaults to 100.
     * @param {number} [params.offset] the initial index from which to return the results. Defaults to 0.
     * @returns Requisitions object
     */
    getRequisitions({ limit, offset }?: {
        limit?: number;
        offset?: number;
    }): any;
    /**
     * Get requisition by id
     * @param {string} requisitionId
     * @returns Returns specific requisition
     */
    getRequisitionById(requisitionId: string): any;
    /**
     * Delete requisition by id
     * @param {string} requisitionId
     * @returns Object that consist confirmation message that requisition has been deleted
     */
    deleteRequisition(requisitionId: string): any;
    #private;
}
//# sourceMappingURL=requisition.d.ts.map