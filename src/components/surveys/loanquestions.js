import LoanSurvey from "../surveyTypes/loansurveytype";

const json = {
  showProgressBar: "bottom",
  goNextPageAutomatic: true,
  showNavigationButtons: true,
  pages: [
    {
      questions: [
        {
          name: "info",
          type: "html",
          html:
            '<p>\n    <img\n        width="42"\n        height="54"\n    align="left"\n    />\n    <strong> </strong>\n    OMB Control No.: 3245-0348 Expiration Date: 04/17/2017\n</p>\n<p align="center">\n    <strong>BORROWER INFORMATION FORM </strong>\n</p>\n<p align="center">\n    <strong>For use with all 7(a) Programs </strong>\n</p>\n<p align="center">\n    <strong> </strong>\n</p>\n<p>\n    <strong>\n        The purpose of this form is to collect identifying information about\n        the applicant, loan request, indebtedness, information about the\n        principals, information about current or previous government financing,\n        and certain other disclosures. The information also facilitates\n        background checks as authorized by Section 7(a)(1)(B) of the Small\n        Business Act, 15 U.S.C. 636(a)(1)(B). This form is to be completed by\n        the Small Business Applicant and submitted to an SBA Participating\n        Lender.\n    </strong>\n</p>\n<p align="center">\n    <strong> </strong>\n</p>\n<p>\n    <u>To be completed by the following:</u>\n</p>\n<p>\n    (With the exception of guarantors, all parties listed below are considered\n    “Associates” of the small business applicant.)\n</p>\n<p>\n    • For a sole proprietorship, the sole proprietor;\n</p>\n<p>\n    • For a partnership, all general partners and all limited partners owning\n    20% or more of the equity of the firm;\n</p>\n<p>\n    • For a corporation, all owners of 20% or more of the corporation and each\n    officer and director;\n</p>\n<p>\n    • For limited liability companies (LLCs), all members owning 20% or more of\n    the company, each officer, director, and managing member;\n</p>\n<p>\n    • Any person hired by the business to manage day-to-day operations; and\n</p>\n<p>\n    • Any other person who is guaranteeing the loan, if required by SBA.\n</p>\n<p>\n    <u>For clarification regarding any of the questions</u>\n    , you should contact the SBA Participating Lender that will be processing\n    the loan request.\n</p>',
        },
        {
          name: "name",
          type: "text",
          inputType: "text",
          title: "NAME OF BUSINESS APPLYING FOR LOAN (“APPLICANT”):",
          hideNumber: true,
          isRequired: true,
        },
        {
          name: "name",
          type: "text",
          inputType: "text",
          title: "YOUR NAME:",
          hideNumber: true,
          isRequired: true,
        },
        {
          name: "title",
          type: "text",
          inputType: "text",
          title: "TITLE:",
          hideNumber: true,
        },
        {
          name: "socialsecuritynumber",
          type: "text",
          inputType: "number",
          title: "SOCIAL SECURITY NUMBER:",
          hideNumber: true,
          isRequired: true,
          validators: [
            {
              type: "numeric",
              maxValue: 999999999,
            },
            {
              name: "birthdate",
              type: "text",
              inputType: "date",
              title: "DATE OF BIRTH: ",
              hideNumber: true,
              isRequired: true,
            },
            {
              name: "birthplace",
              type: "text",
              inputType: "text",
              title: "PLACE OF BIRTH (City & State or Foreign Country): ",
              hideNumber: true,
            },
            {
              name: "owners",
              type: "html",
              html:
                "<p>Veteran Status**: 1=Non-Veteran; 2=Veteran-Other, 3=Service-Disabled Veteran, 4=Not Disclosed</p>\n <p>Gender**: M=Male; F=Female; N= Not Disclosed</p>\n <p>Race**: 1=American Indian or Alaska Native; 2=Asian; 3=Black or African-American; 4=Native Hawaiian or Pacific Islander; 5=White; X=Not Disclosed</p>\n<p>Ethnicity**: H=Hispanic or Latino; N=Not Hispanic or Latino; Y=Not Disclosed</p>",
            },
            {
              type: "matrixdynamic",
              title:
                "List proprietors, partners, officers, directors, all holders of outstanding stock. 100% of ownership must be shown. Use separate sheet if necessary. Please reference the above codes to complete this table for each owner of the applicant business.  More than one race may be selected. ",
              hideNumber: true,
              columns: [
                {
                  name: "Owner",
                  cellType: "text",
                },
                {
                  name: "% Owned",
                  cellType: "text",
                },
                {
                  name: "Veteran",
                  choices: [1, 2, 3, 4, 5],
                },
                {
                  name: "Gender",
                  choices: ["M", "F", "N"],
                },
                {
                  name: "Race",
                  choices: [1, 2, 3, 4, 5],
                },
                {
                  name: "Ethnicity",
                  choices: ["H", "N", "Y"],
                },
              ],
            },
            {
              name: "voluntary_disclosure",
              type: "html",
              html:
                "<p><strong>** The gender/race/ethnicity/veteran data is collected for program reporting purposes only.  Disclosure is voluntary and has no bearing on the credit decision.  </strong></p>",
            },
          ], // end of page 1
        },
        {
          questions: [
            {
              name: "verificaton_questions",
              type: "html",
              html:
                "<p><strong>ALL QUESTIONS MUST BE ANSWERED AND ARE SUBJECT TO VERIFICATION BY SBA </strong></p>",
            },
            {
              name: "criminalcharges",
              type: "radiogroup",
              title:
                "Are you presently subject to an indictment, criminal information, arraignment, or other means by which formal criminal charges are brought in any jurisdiction? ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "arrested",
              type: "radiogroup",
              title:
                "Have you been arrested in the past six months for any criminal offense?",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "convicted",
              type: "radiogroup",
              title:
                "For any criminal offense – other than a minor vehicle violation – have you ever: 1) been convicted; 2) plead guilty; 3) plead nolo contendere; 4) been placed on pretrial diversion; or 5) been placed on any form of parole or probation (including probation before judgment)? ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "application",
              type: "radiogroup",
              title:
                "Has an application for the loan you are applying for now ever been submitted to SBA or to a Certified Development Company or lender in connection with any SBA program? ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "debarment",
              type: "radiogroup",
              title:
                "Are you presently debarred, suspended, proposed for debarment, declared ineligible, or  voluntarily excluded from participation in this transaction by any Federal department or agency?",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "delinquent",
              type: "radiogroup",
              title:
                "If you are at least a 50% or more owner of the applicant business, are you more than 60 days  delinquent on any obligation to pay child support arising under an administrative order, court  order, repayment agreement between the holder and a custodial parent, or repayment agreement  between the holder and a state agency providing child support enforcement services? ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "ineligible",
              type: "html",
              html:
                "<p>\n    <strong>\n        If “YES” to Question 1, the loan request is ineligible for SBA\n        assistance. If there is a “YES” response to Question 2 or 3, you must\n        complete SBA Form 912 and furnish details on a separate sheet,\n        including dates, location, fines, sentences, whether misdemeanor or\n        felony, dates of parole/probation, unpaid fines or penalties, name(s)\n        under which charged, and any other pertinent information. If “YES” to\n        Questions 2 or 3, the lender will be required to conduct a background\n        check and make a character determination in accordance with the\n        procedures described in SOP 50 10 5. If “YES” to Question 3 and you are\n        currently on parole or probation (including probation before judgment),\n        the loan request is ineligible for SBA assistance. If the charge\n        resulting in a “YES” was a single misdemeanor that was subsequently\n        dropped without prosecution, you must provide documentation from the\n        appropriate court or prosecutor’s office along with the completed Form\n        912. If “YES” to Questions 4, 5 or 6,\n        <u>\n            this application may not be submitted to SBA under any delegated or\n        </u>\n        <u>\n            expedited processing method, but must be submitted to the Standard\n            7(a) Loan Guaranty Processing Center\n        </u>\n        <u>\n            (LGPC) for non-delegated processing. The only exception is an\n            application that was declined under a 7(a)\n        </u>\n        <u>\n            Small Loan due to the applicant’s credit score may be submitted\n            under SBA Express procedures.\n        </u>\n        Note: This does not mean that your loan will be denied, only that your\n        lender will need to use different SBA procedures to process the loan.\n    </strong>\n</p>",
            },
            {
              name: "citizen",
              type: "radiogroup",
              title: "Are you a U.S. Citizen? ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "resident",
              type: "radiogroup",
              title: "If “No,” are you a Lawful Permanent resident alien?",
              choices: ["Yes", "No"],
              isRequired: false,
              hideNumber: true,
            },
            {
              name: "registration",
              type: "text",
              inputType: "text",
              title: "Provide Alien Registration Number: ",
              hideNumber: true,
            },
            {
              name: "exported",
              type: "radiogroup",
              title:
                "Are any of your business’ products or services exported or do you plan to begin exporting as a result of this loan? ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "sales",
              type: "text",
              inputType: "number",
              title:
                "If “”Yes,” provide the estimated total export sales this loan will support: $ ",
              hideNumber: true,
            },
            {
              name: "franchise",
              type: "radiogroup",
              title: "Is your business a franchise?  ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "affiliates",
              type: "radiogroup",
              title: "Does the Applicant business have any Affiliates?",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "affiliation",
              type: "html",
              html:
                "<p>\n    Affiliation exists when one individual or entity controls or has the power\n    to control another or when a third party or parties control or have the\n    power to control both. SBA considers factors such as ownership, management\n    previous relationships with or ties to another entity, and contractual\n    relationships when determining whether affiliation exists. The complete\n    definition of affiliation is found at 13 CFR 121.103. (See also, 13 CFR\n    121.107 and 121.301.) An “Affiliate” includes, for example: (1) a parent\n    company; (2) subsidiaries and other companies that are owned or controlled\n    by the Applicant; (3) companies in which an officer, director, general\n    partner, managing member or party owning 20% or more is also an officer,\n    director, general partner, managing member or 20% or greater owner of the\n    Applicant; (4) companies or individuals with unexercised options to own 50%\n    or more of the Applicant’s stock; and (5) companies that have entered into\n    agreements to merge with the Applicant.\n</p>\n<p>\n    <u>If answered “yes,”</u>\n    attach a listing of all Affiliates to this form.\n</p>",
            },
            {
              name: "guarantor",
              type: "radiogroup",
              title:
                "Have you, the Applicant, its Affiliates, or any business owned or controlled by you or any Associate ever\n obtained a direct or guaranteed loan from SBA or any other Federal agency or\n been a guarantor on such a loan?   (This includes student loans and disaster loans.)  ",
              choices: ["Yes", "No"],
              isRequired: true,
            },
            {
              name: "delinquent_finance",
              type: "radiogroup",
              title:
                "(a)	If you answered “Yes” to Question 11, is any of the financing currently delinquent?",
              choices: ["Yes", "No"],
              isRequired: true,
              hideNumber: true,
            },
            {
              name: "default_finance",
              type: "radiogroup",
              title:
                "(b)	If you answered “Yes” to Question 11, did any of this financing ever default and cause a loss to the Government? ",
              choices: ["Yes", "No"],
              isRequired: true,
              hideNumber: true,
            },
          ],
        },
        {
          questions: [
            {
              name: "jobs",
              type: "number",
              title: "Number of jobs to be created as a result of the loan?",
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "retrain",
              type: "number",
              title:
                "Number of jobs that will be retained as a result of the loan that would have been lost otherwise?",
              isRequired: true,
              hideNumber: true,
            },
            {
              name: "broker",
              type: "radiogroup",
              title:
                "Have you or the Applicant used (or intend to use) a packager, broker, accountant, lawyer, etc.to assist in (a) preparing the loan application or any related materials and/or (b) referring the loan to the lender?",
              choices: ["Yes", "No"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "form159",
              type: "text",
              title:
                "If answer is “Yes,” a SBA Form 159 7(a) will need to be completed by the Applicant and the lender. ",
              isRequired: false,
              hideNumber: true,
            },
            {
              name: "construction",
              type: "radiogroup",
              title:
                "Will more than $10,000 of the loan proceeds be used for construction? ",
              choices: ["Yes", "No"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "form601",
              type: "text",
              title:
                "If answer is “Yes,” a SBA Form 601 will need to be completed. ",
              isRequired: false,
              hideNumber: true,
            },
            {
              name: "revenues",
              type: "radiogroup",
              title:
                "Are any of the Applicant’s revenues derived from gambling or from the sale of products or services, or the presentation of any depiction, displays or live performances, of a prurient sexual nature?",
              choices: ["Yes", "No"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "construction_proceeds",
              type: "radiogroup",
              title:
                "Will more than $10,000 of the loan proceeds be used for construction?",
              choices: ["Yes", "No"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "pilot",
              type: "radiogroup",
              title:
                "Is the loan request for a Community Advantage Pilot Program loan?",
              choices: ["Yes", "No"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "form2449",
              type: "text",
              title:
                "If answer is “Yes,” a SBA Form 2449, Community Advantage Addendum will need to be completed.",
              isRequired: false,
              hideNumber: true,
            },
            {
              name: "conflict",
              type: "html",
              html:
                "<p>\n SBA may not provide financial assistance to an applicant where there is any\n appearance of a conflict of interest with an SBA or other governmental\n employee.\n    <u>\n        If any of the questions below are answered “False”, this application\n        may\n    </u>\n    <u>\n        not be submitted under any delegated or expedited processing method,\n        but must be submitted to the LGPC for nondelegated processing.\n    </u>\n    Note: This does not mean that your loan will be denied, only that your\n    lender will need to use different SBA procedures to process the loan.\n</p>",
            },
            {
              name: "interest",
              type: "radiogroup",
              title:
                "No SBA employee, or the household member (see definition at * below) of an SBA employee, is a sole proprietor, partner, officer, director, or stockholder with a 10 percent or more interest, of the Applicant. [13 CFR 105.204] 	",
              choices: ["True", "False"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "formeremployee",
              type: "radiogroup",
              title:
                "No former SBA employee, who has been separated from SBA for less than one year prior to the request for financial assistance, is an employee, owner, partner, attorney, agent, owner of stock, officer, director, creditor or debtor of the Applicant. [13 CFR 105.203] ",
              choices: ["True", "False"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "congress",
              type: "radiogroup",
              title:
                "No member of Congress, or an appointed official or employee of the legislative or judicial branch of the Federal Government, is a sole proprietor, general partner, officer, director, or stockholder with a 10 percent or more interest, or household member of such individual, of the Applicant. [13 CFR 105.301(c)] ",
              choices: ["True", "False"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "gs-13",
              type: "radiogroup",
              title:
                "No Government employee having a grade of at least GS-13 or higher is a sole proprietor, general partner, officer, director, or stockholder with a 10 percent or more interest, or a household member of such individual, of the Applicant. [13 CFR 105.301(a)] ",
              choices: ["True", "False"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "advisorycouncil",
              type: "radiogroup",
              title:
                "No member or employee of a Small Business Advisory Council or a SCORE volunteer is a sole proprietor, general partner, officer, director, or stockholder with a 10 percent or more interest, or a household member of such individual, of the Applicant.  [13 CFR 105.302(a)] ",
              choices: ["True", "False"],
              isRequired: true,
              hideNumber: false,
            },
            {
              name: "householdmember",
              type: "html",
              html:
                "<p>\n *<strong> </strong>A “<strong>household member</strong>” of an SBA employee\n    includes: a) the spouse of the SBA employee; b) the minor children of said\n    individual; and c) the blood relatives of the employee, and the blood\n    relatives of the employee’s spouse who reside in the same place of abode as\n    the employee.[13 CFR 105.201(d)]\n</p>",
            },
          ], //end of question
        },
        {
          questions: [
            {
              name: "restrictions",
              type: "html",
              html:
                '<p>\n  <strong>\n Please read the following restrictions regarding use of federal\n financial assistance programs. If you understand them fully and agree\n to them, sign your name at the end of this document.\n    </strong>\n</p>\n<p>\n    <strong> </strong>\n</p>\n<p>\n    SBA is required to withhold or limit financial assistance, to impose\n    special conditions on approved loans, to provide special notices to\n    applicants or borrowers and to require special reports and data from\n    borrowers in order to comply with legislation passed by the Congress and\n    Executive Orders issued by the President and by the provisions of various\n    inter-agency agreements. SBA has issued regulations and procedures that\n    implement these laws and executive orders. These are contained in Parts\n    112, 113, and 117 of Title 13 of the Code of Federal Regulations and in\n    Standard Operating Procedures.\n</p>\n<p>\n    <strong> </strong>\n</p>\n<p>\n    <strong>Privacy Act (5 U.S.C. 552a) -- </strong>\n    Any person can request to see or get copies of any personal information\n    that SBA has in his or her file when that file is retrieved by individual\n    identifiers such as name or social security numbers. Requests for\n    information about another party may be denied unless SBA has the written\n    permission of the individual to release the information to the requestor or\n    unless the information is subject to disclosure under the Freedom of\n    Information Act.<strong> </strong>\n</p>\n<p>\n    Under the provisions of the Privacy Act, you are not required to provide\n    your social security number. Failure to provide your social security number\n    may not affect any right, benefit or privilege to which you are entitled.\n    Disclosures of name and other personal identifiers are, however, required\n    for a benefit, as SBA requires an individual seeking assistance from SBA to\n    provide it with sufficient information for it to make a character\n    determination. In determining whether an individual is of good character,\n    SBA considers the person’s integrity, candor, and disposition toward\n    criminal actions. Additionally, SBA is specifically authorized to verify\n    your criminal history, or lack thereof, pursuant to section 7(a)(1)(B), 15\n    USC Section 636(a)(1)(B) of the Small Business Act ( the Act). Further, for\n    all forms of assistance, SBA is authorized to make all investigations\n    necessary to ensure that a person has not engaged in acts that violate or\n    will violate the Act or the Small Business Investment Act, 15 USC Sections\n    634(b)(11) and 687(b)(a), respectively. For these purposes, you are asked\n    to voluntarily provide your social security number to assist SBA in making\n    a character determination and to distinguish you from other individuals\n    with the same or similar name or other personal identifier.\n</p>\n<p>\n    The Privacy Act authorizes SBA to make certain “routine uses” of\n    information protected by that Act. One such routine use is the disclosure\nof information maintained in SBA’s investigative files system of records    <strong> </strong>when this information indicates a violation or potential\n    violation of law, whether civil, criminal, or administrative in nature.\n    Specifically, SBA may refer the information to the appropriate agency,\n    whether Federal, State, local or foreign, charged with responsibility for,\n    or otherwise involved in investigation, prosecution, enforcement or\n    prevention of such violations. Another routine use is disclosure to other\n    Federal agencies conducting background checks; only to the extent the\n    information is relevant to the requesting agencies\' function. <u>See,</u>\n    74 F.R. 14890 (2009), and as amended from time to time for additional\n    background and other routine uses.\n</p>\n<p>\n    <strong>Right to Financial Privacy Act of 1978 (12 U.S.C. 3401)</strong>\n    -- This is notice to you as required by the Right to Financial Privacy Act\n    of 1978, of SBA\'s access rights to financial records held by financial\n    institutions that are or have been doing business with you or your\n    business, including any financial institutions participating in a loan or\n    loan guaranty. The law provides that SBA shall have a right of access to\n    your financial records in connection with its consideration or\n    administration of assistance to you in the form of a Government guaranteed\n    loan. SBA is required to provide a certificate of its compliance with the\n    Act to a financial institution in connection with its first request for\n    access to your financial records, after which no further certification is\n    required for subsequent accesses. The law also provides that SBA\'s access\n    rights continue for the term of any approved loan guaranty agreement. No\n    further notice to you of SBA\'s access rights is required during the term of\n    any such agreement. The law also authorizes SBA to transfer to another\n    Government authority any financial records included in an application for a\n    loan, or concerning an approved loan or loan guarantee, as necessary to\n    process, service or foreclose on a loan guaranty or collect on a defaulted\n    loan guaranty.\n</p>\n<p>\n    <strong>Freedom of Information Act</strong>\n    <strong>(5 U.S.C. 552)</strong>\n    -- This law provides, with some exceptions, that SBA must supply\n    information reflected in agency files and records to a person requesting\n    it. Information about approved loans that will be automatically released\n    includes, among other things, statistics on our loan programs (individual\n    borrowers are not identified in the statistics) and other information such\n    as the names of the borrowers (and their officers, directors, stockholders\n    or partners), the collateral pledged to secure the loan, the amount of the\n    loan, its purpose in general terms and the maturity. Proprietary data on a\n    borrower would not routinely be made available to third parties. All\n    requests under this Act are to be addressed to the nearest SBA office and\n    be identified as a Freedom of Information request.\n</p>\n<p>\n    <strong>Flood Disaster Protection Act (42 U.S.C. 4011)</strong>\n    -- Regulations have been issued by the Federal Insurance Administration\n    (FIA) and by SBA implementing this Act and its amendments. These\n    regulations prohibit SBA from making certain loans in an FIA designated\n    floodplain unless Federal Flood insurance is purchased as a condition of\n    the loan. Failure to maintain the required level of flood insurance makes\n    the applicant ineligible for any financial assistance from SBA, including\n    disaster assistance.\n</p>\n<p>\n    <strong> </strong>\n</p>\n<p>\n    <strong>\n        Executive Orders -- Floodplain Management and Wetland Protection (42\n        F.R. 26951 and 42 F.R. 26961)\n    </strong>\n    -- SBA discourages settlement in or development of a floodplain or a\n    wetland. This statement is to notify all SBA loan applicants that such\n    actions are hazardous to both life and property and should be avoided. The\n    additional cost of flood preventive construction must be considered in\n    addition to the possible loss of all assets and investments due to a future\n    flood.\n</p>\n<p>\n    <strong>Occupational Safety and Health Act (15 U.S.C. 651 et seq.)</strong>\n    -- This legislation authorizes the Occupational Safety and Health\n    Administration in the Department of Labor to require businesses to modify\n    facilities and procedures to protect employees or pay penalty fees.\n    Businesses can be forced to cease operations or be prevented from starting\n    operations in a new facility. Therefore, SBA may require additional\n    information from an applicant to determine whether the business will be in\n    compliance with OSHA regulations and allowed to operate its facility after\n    the loan is approved and disbursed. Signing this form as an applicant is\n    certification that the OSHA requirements that apply to the applicant\n    business have been determined and that the applicant, to the best of its\n    knowledge, is in compliance. Furthermore, applicant certifies that it will\n    remain in compliance during the life of the loan.\n</p>\n<p>\n    <strong> </strong>\n</p>\n<p>\n    <strong>Civil Rights Legislation (13 C.F.R. 112, 113, 117)</strong>\n    -- All businesses receiving SBA financial assistance must agree not to\n    discriminate in any business practice, including employment practices and\n    services to the public on the basis of categories cited in 13 C.F.R., Parts\n    112, 113, and 117 of SBA Regulations. This includes making their goods and\n    services available to handicapped clients or customers. All business\n    borrowers will be required to display the "Equal Employment Opportunity\n    Poster" prescribed by SBA.\n</p>\n<p>\n    <strong>Equal Credit Opportunity Act (15 U.S.C. 1691)</strong>\n    -- The Federal Equal Credit Opportunity Act prohibits creditors from\n    discriminating against credit applicants on the basis of race, color,\n    religion, national origin, sex, marital status or age (provided the\n    applicant has the capacity to enter into a binding contract); because all\n    or part of the applicant\'s income derives from any public assistance\n    program, or because the applicant has in good faith exercised any right\n    under the Consumer Credit Protection Act.\n</p>\n<p>\n    <strong>\n        Executive Order 11738 -- Environmental Protection (38 F.R. 251621)\n    </strong>\n    -- The Executive Order charges SBA with administering its loan programs in\n    a manner that will result in effective enforcement of the Clean Air Act,\n    the Federal Water Pollution Act and other environment protection\n    legislation.\n</p>\n<p>\n    <strong>\n        Debt Collection Act of 1982, Deficit Reduction Act of 1984 (31 U.S.C.\n        3701 et seq. and other titles)\n    </strong>\n    -- These laws require SBA to collect aggressively any loan payments which\n    become delinquent. SBA must obtain your taxpayer identification number when\n    you apply for a loan. If you receive a loan, and do not make payments as\n    they come due, SBA may take one or more of the following actions: (1)\n    report the status of your loan(s) to credit bureaus, (2) hire a collection\n    agency to collect your loan, (3) offset your income tax refund or other\n    amounts due to you from the Federal Government, (4) suspend or debar you or\n    your company from doing business with the Federal Government, (5) refer\n    your loan to the Department of Justice or other attorneys for litigation,\n    or (6) foreclose on collateral or take other action permitted in the loan\n    instruments.\n</p>\n<p>\n    <strong> </strong>\n</p>\n<p>\n    <strong>\n        Immigration Reform and Control Act of 1986 (Pub. L. 99-603)\n    </strong>\n    -- If you are an alien who was in this country illegally since before\n    January 1, 1982, you may have been granted lawful temporary resident status\n    by the United States Immigration and Naturalization Service pursuant to the\n    Immigration Reform and Control Act of 1986. For five years from the date\n    you are granted such status, you are not eligible for financial assistance\n    from the SBA in the form of a loan guaranty under Section 7(a) of the Small\n    Business Act unless you are disabled or a Cuban or Haitian entrant. When\n    you sign this document, you are making the certification that the\n    Immigration Reform and Control Act of 1986 does not apply to you, or if it\n    does apply, more than five years have elapsed since you have been granted\n    lawful temporary resident status pursuant to such 1986 legislation.\n</p>\n<h1>\n    Lead-Based Paint Poisoning Prevention Act (42 U.S.C. 4821 et seq.)\n</h1>\n<p>\n    Borrowers using SBA funds for the construction or rehabilitation of a\n    residential structure are prohibited from using lead-based paint (as\n    defined in SBA regulations) on all interior surfaces, whether accessible or\n    not, and exterior surfaces, such as stairs, decks, porches, railings,\n    windows and doors, which are readily accessible to children under 7 years\n    of age. A "residential structure" is any home, apartment, hotel, motel,\n    orphanage, boarding school, dormitory, day care center, extended care\n    facility, college or other school housing, hospital, group practice or\n    community facility and all other residential or institutional structures\n    where persons reside.\n</p>\n<p>\n    <strong>\n        Executive Order 12549, Debarment and Suspension (13 C.F.R. 145)\n    </strong>\n    -- The prospective lower tier participant certifies, by submission of this\n    loan application, that neither it nor its principals are presently\n    debarred, suspended, proposed for debarment, declared ineligible, or\n    voluntarily excluded from participation in this transaction by any Federal\n    department or agency. Where the prospective lower tier participant is\n    unable to certify to any of the statements in this certification, such\n    prospective participants shall attach an explanation to the loan\n    application.\n</p>\n<p align="center">\n    <strong> </strong>\n</p>\n<p align="center">\n    <strong> </strong>\n</p>\n<p align="center">\n    <strong> </strong>\n</p>\n<p align="center">\n    <strong> </strong>\n</p>\n<p align="center">\n    <strong>\n        <u>\n            By Signing Below, You Make the Following Representations,\n            Authorizations and Certifications\n        </u>\n    </strong>\n    <strong> </strong>\n</p>\n<p>\n    <strong> </strong>\n</p>\n<p>\n    <strong> </strong>\n</p>\n<p>\n    <strong><u>REPRESENTATIONS AND AUTHORIZATIONS</u></strong>\n    <strong>: </strong>\n    I represent that I have read the items above and I understand them. I\n    represent that I will comply, whenever applicable, with the hazard\n    insurance, leadbased paint, civil rights or other limitations in this\n    notice. I further represent that all SBA loan proceeds will be used only\n    for business related purposes as specified in the loan application and, to\n    the extent feasible, to purchase only American-made equipment and products.\n    I authorize the SBA Office of Inspector General to request criminal record\n    information about me from criminal justice agencies for the purpose of\n    determining my eligibility for programs authorized by the Small Business\n    Act, as amended.\n</p>\n<p>\n    <strong><u>CERTIFICATION AS TO ACCURACY</u></strong>\n    <strong>: </strong>\n    I certify that the information provided in this application and the\n    information that I have provided in all supporting documents and forms is\n    true and accurate. I realize that the penalty for knowingly making a false\n    statement to obtain a guaranteed loan from SBA is that I may be fined up to\n    $250,000 and/or be put in jail for up to 5 years under 18 USC § 1001 and if\n    false statements are submitted to a Federally insured institution, I may be\n    fined up to $1,000,000 and/or be put in jail for up to 30 years under 18\n    USC § 1014.\n</p>',
            },
            {
              name: "printname",
              type: "text",
              title: "Print Name",
              inputType: "text",
            },
            {
              name: "Date",
              type: "text",
              startWithNewLine: false,
              title: "Date",
              inputType: "date",
            },
            {
              name: "signature",
              type: "signaturepad",
              title: "Signature",
            },
          ],
        },
      ],
    },
  ],
}; //end of json

export default json;
