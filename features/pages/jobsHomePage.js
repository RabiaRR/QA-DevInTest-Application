//job home page  DELETE THIS LINE
//I DID THIS
const { By } = require('selenium-webdriver');


const jobsHomePage = {

    navigationBar: {
        container: By.id('primary-nav'),
        home: By.css('.primary-nav__item--home a'),
        findAJob: By.css('.primary-nav__item--find-a-job a'),
        jobAlerts: By.css('.primary-nav__item--jbe a'),
        searchRecruiters: By.css('.primary-nav__item--recruiters a'),
        jobsBlog: By.css('.primary-nav__item--careers-advice a')
    },

    searchForm: {
        container: By.css('.search__form'),
        keyword: By.css('.search__form #keywords'),
        location: By.css('.search__form #location'),
        within: By.css('.search__form #RadialLocation')
    },

    footer: {
        container: By.css('.tertiary-nav'),
        aboutUs: By.css('.tertiary-nav__item:nth-of-type(1) a'),
        contactUs: By.css('.tertiary-nav__item:nth-of-type(2) a'),
        termsAndConditions: By.css('.tertiary-nav__item:nth-of-type(3) a'),
        privacyPolicy: By.css('.tertiary-nav__item:nth-of-type(4) a'),
        advertiseWithUs: By.css('.tertiary-nav__item:nth-of-type(5) a')
    },

    sector: {
        container: By.className('browse brick'),
        links: {
            bankingAndFinance: By.css('.facet-links__link--banking-and-finance a'),
            primaryAndUtility: By.css('.facet-links__link--primary-and-utility a'),
            development: By.css('.facet-links__link--development a'),
            businessServices: By.css('.facet-links__link--business-services a'),
            media: By.css('.facet-links__link--media a'),
            health: By.css('.facet-links__link--health a'),
            itAndTelecoms: By.css('.facet-links__link--it-and-telecoms a'),
            charity: By.css('.facet-links__link--charity a'),
            humanitarian: By.css('.facet-links__link--humanitarian a')
        }
    },

    jobsBlog: {
        container: By.className('articles brick')
    },

    featuredJobs: {
        container: By.className('featured-jobs brick')
    },

    topBar: {
        container: By.id('top-bar'),
        signIn: By.css('.jobseekers__item--sign-in a'),
        createAccount: By.css('.jobseekers__item--create-account a'),
    }
};

module.exports = jobsHomePage;
