import React, { useState } from "react";
import "./Application.css";
import Dropdown from "./Dropdown.jsx";
import data from "./DropdownData.jsx";

function Application(props) {
  const dropdownButtons = data.map((item, index) => (
    <Dropdown
      key={item.id}
      details={item.details}
      dropdown={item.dropdown}
      dropdown2={item.dropdown2}
      dropdown3={item.dropdown3}
    />
  ));

  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleDivClick = (divId) => {
    setSelectedDiv(divId);
  };

  function submitApplication() {
    alert("This application is not active yet!");
  }

  return (
    <>
      <div id="main-container">
        <section id="personal_details">
          <div>
            <h1 id="section-header">
              <span>1.</span>Personal Details
            </h1>
            <p>We'll need these details in order to be able to contact you.</p>
          </div>
          <div>
            <button onClick={submitApplication} id="submit_application">
              Apply with Linkedln
            </button>
          </div>
        </section>

        <section>
          <form id="details">
            <label htmlFor="fname">First name</label>
            <input type="text" name="fname" placeholder="First name" />

            <label htmlFor="lname">Last name</label>
            <input type="text" name="lname" placeholder="Last name" />

            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" placeholder="email@address.com" />

            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" id="phone" placeholder="Phone" />
            <select name="countryCode" id="phone">
              <option datacountrycode="GB" value="44">
                UK (+44)
              </option>
              <option datacountrycode="US" value="1">
                USA (+1)
              </option>
              <optgroup label="Other countries">
                <option datacountrycode="DZ" value="213">
                  Algeria (+213)
                </option>
                <option datacountrycode="AD" value="376">
                  Andorra (+376)
                </option>
                <option datacountrycode="AO" value="244">
                  Angola (+244)
                </option>
                <option datacountrycode="AI" value="1264">
                  Anguilla (+1264)
                </option>
                <option datacountrycode="AG" value="1268">
                  Antigua &amp; Barbuda (+1268)
                </option>
                <option datacountrycode="AR" value="54">
                  Argentina (+54)
                </option>
                <option datacountrycode="AM" value="374">
                  Armenia (+374)
                </option>
                <option datacountrycode="AW" value="297">
                  Aruba (+297)
                </option>
                <option datacountrycode="AU" value="61">
                  Australia (+61)
                </option>
                <option datacountrycode="AT" value="43">
                  Austria (+43)
                </option>
                <option datacountrycode="AZ" value="994">
                  Azerbaijan (+994)
                </option>
                <option datacountrycode="BS" value="1242">
                  Bahamas (+1242)
                </option>
                <option datacountrycode="BH" value="973">
                  Bahrain (+973)
                </option>
                <option datacountrycode="BD" value="880">
                  Bangladesh (+880)
                </option>
                <option datacountrycode="BB" value="1246">
                  Barbados (+1246)
                </option>
                <option datacountrycode="BY" value="375">
                  Belarus (+375)
                </option>
                <option datacountrycode="BE" value="32">
                  Belgium (+32)
                </option>
                <option datacountrycode="BZ" value="501">
                  Belize (+501)
                </option>
                <option datacountrycode="BJ" value="229">
                  Benin (+229)
                </option>
                <option datacountrycode="BM" value="1441">
                  Bermuda (+1441)
                </option>
                <option datacountrycode="BT" value="975">
                  Bhutan (+975)
                </option>
                <option datacountrycode="BO" value="591">
                  Bolivia (+591)
                </option>
                <option datacountrycode="BA" value="387">
                  Bosnia Herzegovina (+387)
                </option>
                <option datacountrycode="BW" value="267">
                  Botswana (+267)
                </option>
                <option datacountrycode="BR" value="55">
                  Brazil (+55)
                </option>
                <option datacountrycode="BN" value="673">
                  Brunei (+673)
                </option>
                <option datacountrycode="BG" value="359">
                  Bulgaria (+359)
                </option>
                <option datacountrycode="BF" value="226">
                  Burkina Faso (+226)
                </option>
                <option datacountrycode="BI" value="257">
                  Burundi (+257)
                </option>
                <option datacountrycode="KH" value="855">
                  Cambodia (+855)
                </option>
                <option datacountrycode="CM" value="237">
                  Cameroon (+237)
                </option>
                <option datacountrycode="CA" value="1">
                  Canada (+1)
                </option>
                <option datacountrycode="CV" value="238">
                  Cape Verde Islands (+238)
                </option>
                <option datacountrycode="KY" value="1345">
                  Cayman Islands (+1345)
                </option>
                <option datacountrycode="CF" value="236">
                  Central African Republic (+236)
                </option>
                <option datacountrycode="CL" value="56">
                  Chile (+56)
                </option>
                <option datacountrycode="CN" value="86">
                  China (+86)
                </option>
                <option datacountrycode="CO" value="57">
                  Colombia (+57)
                </option>
                <option datacountrycode="KM" value="269">
                  Comoros (+269)
                </option>
                <option datacountrycode="CG" value="242">
                  Congo (+242)
                </option>
                <option datacountrycode="CK" value="682">
                  Cook Islands (+682)
                </option>
                <option datacountrycode="CR" value="506">
                  Costa Rica (+506)
                </option>
                <option datacountrycode="HR" value="385">
                  Croatia (+385)
                </option>
                <option datacountrycode="CU" value="53">
                  Cuba (+53)
                </option>
                <option datacountrycode="CY" value="90392">
                  Cyprus North (+90392)
                </option>
                <option datacountrycode="CY" value="357">
                  Cyprus South (+357)
                </option>
                <option datacountrycode="CZ" value="42">
                  Czech Republic (+42)
                </option>
                <option datacountrycode="DK" value="45">
                  Denmark (+45)
                </option>
                <option datacountrycode="DJ" value="253">
                  Djibouti (+253)
                </option>
                <option datacountrycode="DM" value="1809">
                  Dominica (+1809)
                </option>
                <option datacountrycode="DO" value="1809">
                  Dominican Republic (+1809)
                </option>
                <option datacountrycode="EC" value="593">
                  Ecuador (+593)
                </option>
                <option datacountrycode="EG" value="20">
                  Egypt (+20)
                </option>
                <option datacountrycode="SV" value="503">
                  El Salvador (+503)
                </option>
                <option datacountrycode="GQ" value="240">
                  Equatorial Guinea (+240)
                </option>
                <option datacountrycode="ER" value="291">
                  Eritrea (+291)
                </option>
                <option datacountrycode="EE" value="372">
                  Estonia (+372)
                </option>
                <option datacountrycode="ET" value="251">
                  Ethiopia (+251)
                </option>
                <option datacountrycode="FK" value="500">
                  Falkland Islands (+500)
                </option>
                <option datacountrycode="FO" value="298">
                  Faroe Islands (+298)
                </option>
                <option datacountrycode="FJ" value="679">
                  Fiji (+679)
                </option>
                <option datacountrycode="FI" value="358">
                  Finland (+358)
                </option>
                <option datacountrycode="FR" value="33">
                  France (+33)
                </option>
                <option datacountrycode="GF" value="594">
                  French Guiana (+594)
                </option>
                <option datacountrycode="PF" value="689">
                  French Polynesia (+689)
                </option>
                <option datacountrycode="GA" value="241">
                  Gabon (+241)
                </option>
                <option datacountrycode="GM" value="220">
                  Gambia (+220)
                </option>
                <option datacountrycode="GE" value="7880">
                  Georgia (+7880)
                </option>
                <option datacountrycode="DE" value="49">
                  Germany (+49)
                </option>
                <option datacountrycode="GH" value="233">
                  Ghana (+233)
                </option>
                <option datacountrycode="GI" value="350">
                  Gibraltar (+350)
                </option>
                <option datacountrycode="GR" value="30">
                  Greece (+30)
                </option>
                <option datacountrycode="GL" value="299">
                  Greenland (+299)
                </option>
                <option datacountrycode="GD" value="1473">
                  Grenada (+1473)
                </option>
                <option datacountrycode="GP" value="590">
                  Guadeloupe (+590)
                </option>
                <option datacountrycode="GU" value="671">
                  Guam (+671)
                </option>
                <option datacountrycode="GT" value="502">
                  Guatemala (+502)
                </option>
                <option datacountrycode="GN" value="224">
                  Guinea (+224)
                </option>
                <option datacountrycode="GW" value="245">
                  Guinea - Bissau (+245)
                </option>
                <option datacountrycode="GY" value="592">
                  Guyana (+592)
                </option>
                <option datacountrycode="HT" value="509">
                  Haiti (+509)
                </option>
                <option datacountrycode="HN" value="504">
                  Honduras (+504)
                </option>
                <option datacountrycode="HK" value="852">
                  Hong Kong (+852)
                </option>
                <option datacountrycode="HU" value="36">
                  Hungary (+36)
                </option>
                <option datacountrycode="IS" value="354">
                  Iceland (+354)
                </option>
                <option datacountrycode="IN" value="91">
                  India (+91)
                </option>
                <option datacountrycode="ID" value="62">
                  Indonesia (+62)
                </option>
                <option datacountrycode="IR" value="98">
                  Iran (+98)
                </option>
                <option datacountrycode="IQ" value="964">
                  Iraq (+964)
                </option>
                <option datacountrycode="IE" value="353">
                  Ireland (+353)
                </option>
                <option datacountrycode="IL" value="972">
                  Israel (+972)
                </option>
                <option datacountrycode="IT" value="39">
                  Italy (+39)
                </option>
                <option datacountrycode="JM" value="1876">
                  Jamaica (+1876)
                </option>
                <option datacountrycode="JP" value="81">
                  Japan (+81)
                </option>
                <option datacountrycode="JO" value="962">
                  Jordan (+962)
                </option>
                <option datacountrycode="KZ" value="7">
                  Kazakhstan (+7)
                </option>
                <option datacountrycode="KE" value="254">
                  Kenya (+254)
                </option>
                <option datacountrycode="KI" value="686">
                  Kiribati (+686)
                </option>
                <option datacountrycode="KP" value="850">
                  Korea North (+850)
                </option>
                <option datacountrycode="KR" value="82">
                  Korea South (+82)
                </option>
                <option datacountrycode="KW" value="965">
                  Kuwait (+965)
                </option>
                <option datacountrycode="KG" value="996">
                  Kyrgyzstan (+996)
                </option>
                <option datacountrycode="LA" value="856">
                  Laos (+856)
                </option>
                <option datacountrycode="LV" value="371">
                  Latvia (+371)
                </option>
                <option datacountrycode="LB" value="961">
                  Lebanon (+961)
                </option>
                <option datacountrycode="LS" value="266">
                  Lesotho (+266)
                </option>
                <option datacountrycode="LR" value="231">
                  Liberia (+231)
                </option>
                <option datacountrycode="LY" value="218">
                  Libya (+218)
                </option>
                <option datacountrycode="LI" value="417">
                  Liechtenstein (+417)
                </option>
                <option datacountrycode="LT" value="370">
                  Lithuania (+370)
                </option>
                <option datacountrycode="LU" value="352">
                  Luxembourg (+352)
                </option>
                <option datacountrycode="MO" value="853">
                  Macao (+853)
                </option>
                <option datacountrycode="MK" value="389">
                  Macedonia (+389)
                </option>
                <option datacountrycode="MG" value="261">
                  Madagascar (+261)
                </option>
                <option datacountrycode="MW" value="265">
                  Malawi (+265)
                </option>
                <option datacountrycode="MY" value="60">
                  Malaysia (+60)
                </option>
                <option datacountrycode="MV" value="960">
                  Maldives (+960)
                </option>
                <option datacountrycode="ML" value="223">
                  Mali (+223)
                </option>
                <option datacountrycode="MT" value="356">
                  Malta (+356)
                </option>
                <option datacountrycode="MH" value="692">
                  Marshall Islands (+692)
                </option>
                <option datacountrycode="MQ" value="596">
                  Martinique (+596)
                </option>
                <option datacountrycode="MR" value="222">
                  Mauritania (+222)
                </option>
                <option datacountrycode="YT" value="269">
                  Mayotte (+269)
                </option>
                <option datacountrycode="MX" value="52">
                  Mexico (+52)
                </option>
                <option datacountrycode="FM" value="691">
                  Micronesia (+691)
                </option>
                <option datacountrycode="MD" value="373">
                  Moldova (+373)
                </option>
                <option datacountrycode="MC" value="377">
                  Monaco (+377)
                </option>
                <option datacountrycode="MN" value="976">
                  Mongolia (+976)
                </option>
                <option datacountrycode="MS" value="1664">
                  Montserrat (+1664)
                </option>
                <option datacountrycode="MA" value="212">
                  Morocco (+212)
                </option>
                <option datacountrycode="MZ" value="258">
                  Mozambique (+258)
                </option>
                <option datacountrycode="MN" value="95">
                  Myanmar (+95)
                </option>
                <option datacountrycode="NA" value="264">
                  Namibia (+264)
                </option>
                <option datacountrycode="NR" value="674">
                  Nauru (+674)
                </option>
                <option datacountrycode="NP" value="977">
                  Nepal (+977)
                </option>
                <option datacountrycode="NL" value="31">
                  Netherlands (+31)
                </option>
                <option datacountrycode="NC" value="687">
                  New Caledonia (+687)
                </option>
                <option datacountrycode="NZ" value="64">
                  New Zealand (+64)
                </option>
                <option datacountrycode="NI" value="505">
                  Nicaragua (+505)
                </option>
                <option datacountrycode="NE" value="227">
                  Niger (+227)
                </option>
                <option datacountrycode="NG" value="234">
                  Nigeria (+234)
                </option>
                <option datacountrycode="NU" value="683">
                  Niue (+683)
                </option>
                <option datacountrycode="NF" value="672">
                  Norfolk Islands (+672)
                </option>
                <option datacountrycode="NP" value="670">
                  Northern Marianas (+670)
                </option>
                <option datacountrycode="NO" value="47">
                  Norway (+47)
                </option>
                <option datacountrycode="OM" value="968">
                  Oman (+968)
                </option>
                <option datacountrycode="PW" value="680">
                  Palau (+680)
                </option>
                <option datacountrycode="PA" value="507">
                  Panama (+507)
                </option>
                <option datacountrycode="PG" value="675">
                  Papua New Guinea (+675)
                </option>
                <option datacountrycode="PY" value="595">
                  Paraguay (+595)
                </option>
                <option datacountrycode="PE" value="51">
                  Peru (+51)
                </option>
                <option datacountrycode="PH" value="63">
                  Philippines (+63)
                </option>
                <option datacountrycode="PL" value="48">
                  Poland (+48)
                </option>
                <option datacountrycode="PT" value="351">
                  Portugal (+351)
                </option>
                <option datacountrycode="PR" value="1787">
                  Puerto Rico (+1787)
                </option>
                <option datacountrycode="QA" value="974">
                  Qatar (+974)
                </option>
                <option datacountrycode="RE" value="262">
                  Reunion (+262)
                </option>
                <option datacountrycode="RO" value="40">
                  Romania (+40)
                </option>
                <option datacountrycode="RU" value="7">
                  Russia (+7)
                </option>
                <option datacountrycode="RW" value="250">
                  Rwanda (+250)
                </option>
                <option datacountrycode="SM" value="378">
                  San Marino (+378)
                </option>
                <option datacountrycode="ST" value="239">
                  Sao Tome &amp; Principe (+239)
                </option>
                <option datacountrycode="SA" value="966">
                  Saudi Arabia (+966)
                </option>
                <option datacountrycode="SN" value="221">
                  Senegal (+221)
                </option>
                <option datacountrycode="CS" value="381">
                  Serbia (+381)
                </option>
                <option datacountrycode="SC" value="248">
                  Seychelles (+248)
                </option>
                <option datacountrycode="SL" value="232">
                  Sierra Leone (+232)
                </option>
                <option datacountrycode="SG" value="65">
                  Singapore (+65)
                </option>
                <option datacountrycode="SK" value="421">
                  Slovak Republic (+421)
                </option>
                <option datacountrycode="SI" value="386">
                  Slovenia (+386)
                </option>
                <option datacountrycode="SB" value="677">
                  Solomon Islands (+677)
                </option>
                <option datacountrycode="SO" value="252">
                  Somalia (+252)
                </option>
                <option datacountrycode="ZA" value="27">
                  South Africa (+27)
                </option>
                <option datacountrycode="ES" value="34">
                  Spain (+34)
                </option>
                <option datacountrycode="LK" value="94">
                  Sri Lanka (+94)
                </option>
                <option datacountrycode="SH" value="290">
                  St. Helena (+290)
                </option>
                <option datacountrycode="KN" value="1869">
                  St. Kitts (+1869)
                </option>
                <option datacountrycode="SC" value="1758">
                  St. Lucia (+1758)
                </option>
                <option datacountrycode="SD" value="249">
                  Sudan (+249)
                </option>
                <option datacountrycode="SR" value="597">
                  Suriname (+597)
                </option>
                <option datacountrycode="SZ" value="268">
                  Swaziland (+268)
                </option>
                <option datacountrycode="SE" value="46">
                  Sweden (+46)
                </option>
                <option datacountrycode="CH" value="41">
                  Switzerland (+41)
                </option>
                <option datacountrycode="SI" value="963">
                  Syria (+963)
                </option>
                <option datacountrycode="TW" value="886">
                  Taiwan (+886)
                </option>
                <option datacountrycode="TJ" value="7">
                  Tajikstan (+7)
                </option>
                <option datacountrycode="TH" value="66">
                  Thailand (+66)
                </option>
                <option datacountrycode="TG" value="228">
                  Togo (+228)
                </option>
                <option datacountrycode="TO" value="676">
                  Tonga (+676)
                </option>
                <option datacountrycode="TT" value="1868">
                  Trinidad &amp; Tobago (+1868)
                </option>
                <option datacountrycode="TN" value="216">
                  Tunisia (+216)
                </option>
                <option datacountrycode="TR" value="90">
                  Turkey (+90)
                </option>
                <option datacountrycode="TM" value="7">
                  Turkmenistan (+7)
                </option>
                <option datacountrycode="TM" value="993">
                  Turkmenistan (+993)
                </option>
                <option datacountrycode="TC" value="1649">
                  Turks &amp; Caicos Islands (+1649)
                </option>
                <option datacountrycode="TV" value="688">
                  Tuvalu (+688)
                </option>
                <option datacountrycode="UG" value="256">
                  Uganda (+256)
                </option>
                <option datacountrycode="GB" value="44">
                  UK (+44)
                </option>
                <option datacountrycode="UA" value="380">
                  Ukraine (+380)
                </option>
                <option datacountrycode="AE" value="971">
                  United Arab Emirates (+971)
                </option>
                <option datacountrycode="UY" value="598">
                  Uruguay (+598)
                </option>
                <option datacountrycode="US" value="1">
                  USA (+1)
                </option>
                <option datacountrycode="UZ" value="7">
                  Uzbekistan (+7)
                </option>
                <option datacountrycode="VU" value="678">
                  Vanuatu (+678)
                </option>
                <option datacountrycode="VA" value="379">
                  Vatican City (+379)
                </option>
                <option datacountrycode="VE" value="58">
                  Venezuela (+58)
                </option>
                <option datacountrycode="VN" value="84">
                  Vietnam (+84)
                </option>
                <option datacountrycode="VG" value="84">
                  Virgin Islands - British (+1284)
                </option>
                <option datacountrycode="VI" value="84">
                  Virgin Islands - US (+1340)
                </option>
                <option datacountrycode="WF" value="681">
                  Wallis &amp; Futuna (+681)
                </option>
                <option datacountrycode="YE" value="969">
                  Yemen (North)(+969)
                </option>
                <option datacountrycode="YE" value="967">
                  Yemen (South)(+967)
                </option>
                <option datacountrycode="ZM" value="260">
                  Zambia (+260)
                </option>
                <option datacountrycode="ZW" value="263">
                  Zimbabwe (+263)
                </option>
              </optgroup>
            </select>

            <label htmlFor="linkedln">
              LinkedIn URL <span>Optional</span>
            </label>
            <input
              type="text"
              name="linkedln"
              placeholder="http://www.linkedln.com/in/joebloggs"
            />

            <label htmlFor="addressLineOne">Address Line 1</label>
            <input
              type="text"
              name="addressLineOne"
              placeholder="Address Line 1"
            />

            <label htmlFor="addressLineTwo">Address Line 2</label>
            <input
              type="text"
              name="addressLineTwo"
              placeholder="Address Line 2"
            />

            <label htmlFor="town">Town / City</label>
            <input type="text" name="town" placeholder="Town / City" />

            <label htmlFor="country">Country / State</label>
            <input type="text" name="country" placeholder="Country / State" />

            <label htmlFor="postcode">Postcode / Zipcode</label>
            <input
              type="text"
              name="postcode"
              placeholder="Postcode / Zipcode"
            />
          </form>
        </section>

        <section>
          <div>
            <h1 id="section-header">
              <span>2.</span>Resume
            </h1>
            <p id="resume_paragraph1">Resume / CV</p>
            <p id="resume_paragraph2">
              Accepted file formats are .pdf and .docx
            </p>
          </div>

          <div id="file_container">
            <input type="file" id="file" name="myfile"></input>
          </div>
          <p id="resume_paragraph1">Personal Summary</p>
          <p id="resume_paragraph2">
            This section is optional. Use it to tell us a little more about
            yourself.
          </p>
          <textarea></textarea>
        </section>

        <section>
          <h1 id="section-header">
            <span>3.</span>Questions
          </h1>
          <p>
            Are you comfortable working Monday through Friday from 8am-5pm PST?
          </p>

          <div id="radio-container">
            <div
              id="div1"
              style={{
                backgroundColor: selectedDiv === "div1" ? "#fae3d9" : "white",
                border: selectedDiv === "div1" ? "none" : "1px solid gray",
              }}
             
            >
              <input  onClick={() => handleDivClick("div1")} type="radio" name="radioGroup" />
              <span className="radio-icon"></span>
              <label htmlFor="radio1">YES</label>
            </div>

            <div
              id="div2"
              style={{
                backgroundColor: selectedDiv === "div2" ? "#fae3d9" : "white",
                border: selectedDiv === "div2" ? "none" : "1px solid gray",
              }}
             
            >
              <input onClick={() => handleDivClick("div2")} type="radio" name="radioGroup" />
              <span className="radio-icon"></span>
              <label htmlFor="radio2">NO</label>
            </div>
          </div>

          <p>
            Are you comfortable working Monday through Friday from 8am-5pm PST?
          </p>

          <div id="radio-container">
            <div
              id="div3"
              style={{
                backgroundColor: selectedDiv === "div3" ? "#fae3d9" : "white",
                border: selectedDiv === "div3" ? "none" : "1px solid gray",
              }}
              
            >
              <input onClick={() => handleDivClick("div3")} type="radio" name="radioGroup" />
              <span className="radio-icon"></span>
              <label htmlFor="radio1">YES</label>
            </div>

            <div
              id="div4"
              style={{
                backgroundColor: selectedDiv === "div4" ? "#fae3d9" : "white",
                border: selectedDiv === "div4" ? "none" : "1px solid gray",
              }}
              
            >
              <input onClick={() => handleDivClick("div4")} type="radio" name="radioGroup" />
              <span className="radio-icon"></span>
              <label htmlFor="radio2">NO</label>
            </div>
          </div>
        </section>
        <div className="container-data">{dropdownButtons}</div>

        <section>
          <h1 id="section-header">
            <span>4.</span>Submit Application
          </h1>
          <p>
            In order to contact you with future jobs that you may be interested
            in, we need to store your personal data.
          </p>
          <p>
            If you are happy for us to do so please click the checkbox below.
          </p>
          <p>
            You can view our GDPR /{" "}
            <a href="http://www.google.com" target="_blank">
              Privacy
            </a>{" "}
            notice for more information.
          </p>
          <div id="checkbox">
            <input type="checkbox" />
            <p>Allow us to process your personal information.</p>
          </div>
          <br />
          <p>
            Not ready to submit the application yet?{" "}
            <a href="http://www.google.com" target="_blank">
              Save application for later
            </a>
          </p>

          <div id="container-submit-button">
            <button onClick={submitApplication} id="submit">
              Submit Application
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Application;
