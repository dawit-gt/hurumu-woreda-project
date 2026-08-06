"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationStatus = exports.DocumentType = exports.ServiceCategory = exports.NewsTag = exports.NewsStatus = exports.Role = void 0;
var Role;
(function (Role) {
    Role["SUPER_ADMIN"] = "SUPER_ADMIN";
    Role["ADMIN"] = "ADMIN";
    Role["DEPARTMENT_HEAD"] = "DEPARTMENT_HEAD";
    Role["STAFF"] = "STAFF";
    Role["PUBLIC"] = "PUBLIC";
})(Role || (exports.Role = Role = {}));
var NewsStatus;
(function (NewsStatus) {
    NewsStatus["DRAFT"] = "DRAFT";
    NewsStatus["PUBLISHED"] = "PUBLISHED";
    NewsStatus["ARCHIVED"] = "ARCHIVED";
})(NewsStatus || (exports.NewsStatus = NewsStatus = {}));
var NewsTag;
(function (NewsTag) {
    NewsTag["ANNOUNCEMENT"] = "ANNOUNCEMENT";
    NewsTag["EVENT"] = "EVENT";
    NewsTag["NOTICE"] = "NOTICE";
    NewsTag["PROJECT"] = "PROJECT";
    NewsTag["TENDER"] = "TENDER";
})(NewsTag || (exports.NewsTag = NewsTag = {}));
var ServiceCategory;
(function (ServiceCategory) {
    ServiceCategory["CIVIL_REGISTRATION"] = "CIVIL_REGISTRATION";
    ServiceCategory["LAND_ADMINISTRATION"] = "LAND_ADMINISTRATION";
    ServiceCategory["BUSINESS_LICENSE"] = "BUSINESS_LICENSE";
    ServiceCategory["AGRICULTURE"] = "AGRICULTURE";
    ServiceCategory["HEALTH"] = "HEALTH";
    ServiceCategory["EDUCATION"] = "EDUCATION";
    ServiceCategory["INFRASTRUCTURE"] = "INFRASTRUCTURE";
    ServiceCategory["SOCIAL_SERVICES"] = "SOCIAL_SERVICES";
    ServiceCategory["FINANCE"] = "FINANCE";
    ServiceCategory["OTHER"] = "OTHER";
})(ServiceCategory || (exports.ServiceCategory = ServiceCategory = {}));
var DocumentType;
(function (DocumentType) {
    DocumentType["BUDGET_REPORT"] = "BUDGET_REPORT";
    DocumentType["PROCUREMENT_PLAN"] = "PROCUREMENT_PLAN";
    DocumentType["PERFORMANCE_REPORT"] = "PERFORMANCE_REPORT";
    DocumentType["POLICY"] = "POLICY";
    DocumentType["GUIDELINE"] = "GUIDELINE";
    DocumentType["TENDER_DOCUMENT"] = "TENDER_DOCUMENT";
    DocumentType["ANNUAL_PLAN"] = "ANNUAL_PLAN";
    DocumentType["OTHER"] = "OTHER";
})(DocumentType || (exports.DocumentType = DocumentType = {}));
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["PENDING"] = "PENDING";
    ApplicationStatus["UNDER_REVIEW"] = "UNDER_REVIEW";
    ApplicationStatus["APPROVED"] = "APPROVED";
    ApplicationStatus["REJECTED"] = "REJECTED";
    ApplicationStatus["REQUIRES_DOCUMENTS"] = "REQUIRES_DOCUMENTS";
})(ApplicationStatus || (exports.ApplicationStatus = ApplicationStatus = {}));
//# sourceMappingURL=enums.js.map