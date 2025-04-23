"use client";

import { useState } from "react";

export default function AccountAddress() {
  const [activeEdit, setactiveEdit] = useState(false);
  const [activeAdd, setactiveAdd] = useState(false);

  return (
      <div className="my-account-content account-address">
        <div className="text-center widget-inner-address">
          <button
              className="tf-btn btn-fill animate-hover-btn btn-address mb_20"
              onClick={() => setactiveEdit(true)}
          >
            Ajouter une nouvelle adresse
          </button>
          <form
              className="show-form-address wd-form-address"
              id="formnewAddress"
              onSubmit={(e) => e.preventDefault()}
              style={activeEdit ? { display: "block" } : { display: "none" }}
          >
            <div className="title">Ajouter une nouvelle adresse</div>
            <div className="box-field grid-2-lg">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="firstname"
                    name="first name"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="firstname"
                >
                  Prénom
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="lastname"
                    name="last name"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="lastname"
                >
                  Nom de famille
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="company"
                    name="company"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="company"
                >
                  Société
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="address"
                    name="address"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="address"
                >
                  Adresse
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="city"
                    name="city"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="city"
                >
                  Ville
                </label>
              </div>
            </div>
            <div className="box-field">
              <label
                  htmlFor="country"
                  className="mb_10 fw-4 text-start d-block text_black-2 "
              >
                Pays/Région
              </label>
              <div className="select-custom">
                <select
                    className="tf-select w-100"
                    id="country"
                    name="address[country]"
                    data-default=""
                >
                  <option value="---" data-provinces="[]">
                    ---
                  </option>
                  <option value="Australia" data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]">
                    Australie
                  </option>
                  <option value="Austria" data-provinces="[]">
                    Autriche
                  </option>
                  <option value="Belgium" data-provinces="[]">
                    Belgique
                  </option>
                  <option value="Canada" data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]">
                    Canada
                  </option>
                  <option value="Czech Republic" data-provinces="[]">
                    République tchèque
                  </option>
                  <option value="Denmark" data-provinces="[]">
                    Danemark
                  </option>
                  <option value="Finland" data-provinces="[]">
                    Finlande
                  </option>
                  <option value="France" data-provinces="[]">
                    France
                  </option>
                  <option value="Germany" data-provinces="[]">
                    Allemagne
                  </option>
                  <option value="Hong Kong" data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]">
                    Hong Kong SAR
                  </option>
                  <option value="Ireland" data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]">
                    Irlande
                  </option>
                  <option value="Israel" data-provinces="[]">
                    Israël
                  </option>
                  <option value="Italy" data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]">
                    Italie
                  </option>
                  <option value="Japan" data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]">
                    Japon
                  </option>
                  <option value="Malaysia" data-provinces=" [['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]">
                    Malaisie
                  </option>
                  <option value="Netherlands" data-provinces="[]">
                    Pays-Bas
                  </option>
                  <option value="New Zealand" data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','Hawke’s Bay'],['Manawatu-Wanganui','Manawatū-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]">
                    Nouvelle-Zélande
                  </option>
                  <option value="Norway" data-provinces="[]">
                    Norvège
                  </option>
                  <option value="Poland" data-provinces="[]">
                    Pologne
                  </option>
                  <option value="Portugal" data-provinces="[['Aveiro','Aveiro'],['Açores','Azores'],['Beja','Beja'],['Braga','Braga'],['Bragança','Bragança'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['Santarém','Santarém'],['Setúbal','Setúbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Évora','Évora']]">
                    Portugal
                  </option>
                  <option value="Singapore" data-provinces="[]">
                    Singapour
                  </option>
                  <option value="South Korea" data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]">
                    Corée du Sud
                  </option>
                  <option value="Spain" data-provinces="[['A Coruña','A Coruña'],['Albacete','Albacete'],['Alicante','Alicante'],['Almería','Almería'],['Asturias','Asturias Province'],['Badajoz','Badajoz'],['Balears','Balears Province'],['Barcelona','Barcelona'],['Burgos','Burgos'],['Cantabria','Cantabria Province'],['Castellón','Castellón'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['Cáceres','Cáceres'],['Cádiz','Cádiz'],['Córdoba','Córdoba'],['Girona','Girona'],['Granada','Granada'],['Guadalajara','Guadalajara'],['Guipúzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['Jaén','Jaén'],['La Rioja','La Rioja Province'],['Las Palmas','Las Palmas'],['León','León'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Madrid Province'],['Melilla','Melilla'],['Murcia','Murcia'],['M álaga','Málaga'],['Navarra','Navarra'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanca','Salamanca'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Segovia','Segovia'],['Sevilla','Séville'],['Soria','Soria'],['Tarragona','Tarragona'],['Teruel','Teruel'],['Toledo','Toledo'],['Valencia','Valence'],['Valladolid','Valladolid'],['Vizcaya','Biscaye'],['Zamora','Zamora'],['Zaragoza','Saragosse'],['Álava','Álava'],['Ávila','Ávila']]">
                    Espagne
                  </option>
                  <option value="Sweden" data-provinces="[]">
                    Suède
                  </option>
                  <option value="Switzerland" data-provinces="[]">
                    Suisse
                  </option>
                  <option value="United Arab Emirates" data-provinces="[['Abu Dhabi','Abu Dhabi'],['Ajman','Ajman'],['Dubai','Dubai'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Sharjah','Sharjah'],['Umm al-Quwain','Umm al-Quwain']]">
                    Émirats Arabes Unis
                  </option>
                  <option value="United Kingdom" data-provinces="[['British Forces','British Forces'],['England','Angleterre'],['Northern Ireland','Irlande du Nord'],['Scotland','Écosse'],['Wales','Pays de Galles']]">
                    Royaume-Uni
                  </option>
                  <option value="United States" data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['American Samoa','Samoa américaines'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Armed Forces Americas','Forces armées des Amériques'],['Armed Forces Europe','Forces armées d'Europe'],['Armed Forces Pacific','Forces armées du Pacifique'],['California','Californie'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District of Columbia','Washington DC'],['Federated States of Micronesia','Micronésie'],['Florida','Floride'],['Georgia','Géorgie'],['Guam','Guam'],['Hawaii','Hawaï'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiana','Louisiane'],['Maine','Maine'],['Marshall Islands','Îles Marshall'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['New Mexico','Nouveau-Mexique'],['New York','New York'],['North Carolina','Caroline du Nord'],['North Dakota','Dakota du Nord'],['Northern Mariana Islands','Îles Mariannes du Nord'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvania','Pennsylvanie'],['Puerto Rico','Porto Rico'],['Rhode Island','Rhode Island'],['South Carolina','Caroline du Sud'],['South Dakota','Dakota du Sud'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Virgin Islands','Îles Vierges des États-Unis'],['Virginia','Virginie'],['Washington','Washington'],['West Virginia','Virginie-Occidentale'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]">
                    États-Unis
                  </option>
                  <option value="Vietnam" data-provinces="[]">
                    Vietnam
                  </option>
                </select>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="province"
                    name="province"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="province"
                >
                  Province
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                < input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="AddressZipNew"
                    name="AddressZipNew"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="AddressZipNew"
                >
                  Code Postal/ZIP
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="phone"
                    name="phone"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="phone"
                >
                  Téléphone
                </label>
              </div>
            </div>
            <div className="box-field text-start">
              <div className="box-checkbox fieldset-radio d-flex align-items-center gap-8">
                <input
                    type="checkbox"
                    id="check-new-address"
                    className="tf-check"
                />
                <label htmlFor="check-new-address" className="text_black-2 fw-4">
                  Définir comme adresse par défaut.
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-20">
              <button type="button" className="tf-btn btn-fill animate-hover-btn">
                Ajouter l'adresse
              </button>
              <span
                  className="tf-btn btn-fill animate-hover-btn btn-hide-address"
                  onClick={() => setactiveEdit(false)}
              >
              Annuler
            </span>
            </div>
          </form>
          <h6 className="mb_20">Par défaut</h6>
          <p>themesflat</p>
          <p>1234 Fashion Street, Suite 567</p>
          <p>New York</p>
          <p>info@fashionshop.com</p>
          <p className="mb_10">(212) 555-1234</p>
          <div className="d-flex gap-10 justify-content-center">
            <button
                className="tf-btn btn-fill animate-hover-btn justify-content-center btn-edit-address"
                onClick={() => setactiveAdd(true)}
            >
              <span>Modifier</span>
            </button>
            <button className="tf-btn btn-outline animate-hover-btn justify-content-center">
              <span>Supprimer</span>
            </button>
          </div>
          <form
              className="edit-form-address wd-form-address"
              id="formeditAddress"
              onSubmit={(e) => e.preventDefault()}
              style={activeAdd ? { display: "block" } : { display: "none" }}
          >
            <div className="title">Modifier l'adresse</div>
            <div className="box-field grid-2-lg">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="firstnameEdit"
                    name="first name"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="firstnameEdit"
                >
                  Prénom
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="lastnameEdit"
                    name="last name"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="lastnameEdit"
                >
                  Nom de famille
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="companyEdit"
                    name="company"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="companyEdit"
                >
                  Société
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="addressEdit"
                    name="address"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="addressEdit"
                >
                  Adresse
                </label>
              </div>
            </div>
            <div className=" box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="cityEdit"
                    name="city"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="cityEdit"
                >
                  Ville
                </label>
              </div>
            </div>
            <div className="box-field">
              <label
                  htmlFor="countryEdit"
                  className="mb_10 fw-4 text-start d-block text_black-2"
              >
                Pays/Région
              </label>
              <div className="select-custom">
                <select
                    className="tf-select w-100"
                    id="countryEdit"
                    name="address[country]"
                    data-default=""
                >
                  <option value="---" data-provinces="[]">
                    ---
                  </option>
                  <option value="Australia" data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]">
                    Australie
                  </option>
                  <option value="Austria" data-provinces="[]">
                    Autriche
                  </option>
                  <option value="Belgium" data-provinces="[]">
                    Belgique
                  </option>
                  <option value="Canada" data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]">
                    Canada
                  </option>
                  <option value="Czech Republic" data-provinces="[]">
                    République tchèque
                  </option>
                  <option value="Denmark" data-provinces="[]">
                    Danemark
                  </option>
                  <option value="Finland" data-provinces="[]">
                    Finlande
                  </option>
                  <option value="France" data-provinces="[]">
                    France
                  </option>
                  <option value="Germany" data-provinces="[]">
                    Allemagne
                  </option>
                  <option value="Hong Kong" data-provinces="[['Hong Kong Island','Hong Kong Island'],['Kowloon','Kowloon'],['New Territories','New Territories']]">
                    Hong Kong SAR
                  </option>
                  <option value="Ireland" data-provinces="[['Carlow','Carlow'],['Cavan','Cavan'],['Clare','Clare'],['Cork','Cork'],['Donegal','Donegal'],['Dublin','Dublin'],['Galway','Galway'],['Kerry','Kerry'],['Kildare','Kildare'],['Kilkenny','Kilkenny'],['Laois','Laois'],['Leitrim','Leitrim'],['Limerick','Limerick'],['Longford','Longford'],['Louth','Louth'],['Mayo','Mayo'],['Meath','Meath'],['Monaghan','Monaghan'],['Offaly','Offaly'],['Roscommon','Roscommon'],['Sligo','Sligo'],['Tipperary','Tipperary'],['Waterford','Waterford'],['Westmeath','Westmeath'],['Wexford','Wexford'],['Wicklow','Wicklow']]">
                    Irlande
                  </option>
                  <option value="Israel" data-provinces="[]">
                    Israël
                  </option>
                  <option value="Italy" data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],[' Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]">
                    Italie
                  </option>
                  <option value="Japan" data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nag ```javascript
ano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]">
                    Japon
                  </option>
                  <option value="Malaysia" data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]">
                    Malaisie
                  </option>
                  <option value="Netherlands" data-provinces="[]">
                    Pays-Bas
                  </option>
                  <option value="New Zealand" data-provinces="[['Auckland','Auckland'],['Bay of Plenty','Bay of Plenty'],['Canterbury','Canterbury'],['Chatham Islands','Chatham Islands'],['Gisborne','Gisborne'],['Hawke's Bay','Hawke’s Bay'],['Manawatu-Wanganui','Manawatū-Whanganui'],['Marlborough','Marlborough'],['Nelson','Nelson'],['Northland','Northland'],['Otago','Otago'],['Southland','Southland'],['Taranaki','Taranaki'],['Tasman','Tasman'],['Waikato','Waikato'],['Wellington','Wellington'],['West Coast','West Coast']]">
                    Nouvelle-Zélande
                  </option>
                  <option value="Norway" data-provinces="[]">
                    Norvège
                  </option>
                  <option value="Poland" data-provinces="[]">
                    Pologne
                  </option>
                  <option value="Portugal" data-provinces="[['Aveiro','Aveiro'],['Açores','Azores'],['Beja','Beja'],['Braga','Braga'],['Bragança','Bragança'],['Castelo Branco','Castelo Branco'],['Coimbra','Coimbra'],['Faro','Faro'],['Guarda','Guarda'],['Leiria','Leiria'],['Lisboa','Lisbon'],['Madeira','Madeira'],['Portalegre','Portalegre'],['Porto','Porto'],['Santarém','Santarém'],['Setúbal','Setúbal'],['Viana do Castelo','Viana do Castelo'],['Vila Real','Vila Real'],['Viseu','Viseu'],['Évora','Évora']]">
                    Portugal
                  </option>
                  <option value="Singapore" data-provinces="[]">
                    Singapour
                  </option>
                  <option value="South Korea" data-provinces="[['Busan','Busan'],['Chungbuk','North Chungcheong'],['Chungnam','South Chungcheong'],['Daegu','Daegu'],['Daejeon','Daejeon'],['Gangwon','Gangwon'],['Gwangju','Gwangju City'],['Gyeongbuk','North Gyeongsang'],['Gyeonggi','Gyeonggi'],['Gyeongnam','South Gyeongsang'],['Incheon','Incheon'],['Jeju','Jeju'],['Jeonbuk','North Jeolla'],['Jeonnam','South Jeolla'],['Sejong','Sejong'],['Seoul','Seoul'],['Ulsan','Ulsan']]">
                    Corée du Sud
                  </option>
                  <option
                      value="Espagne"
                      data-provinces="[['A Coruña','A Coruña'],['Albacete','Albacete'],['Alicante','Alicante'],['Almería','Almería'],['Asturias','Province d'Asturias'],['Badajoz','Badajoz'],['Balears','Province des Baléares'],['Barcelone','Barcelone'],['Burgos','Burgos'],['Cantabrie','Province de Cantabrie'],['Castellón','Castellón'],['Ceuta','Ceuta'],['Ciudad Real','Ciudad Real'],['Cuenca','Cuenca'],['Cáceres','Cáceres'],['Cádiz','Cádiz'],['Córdoba','Córdoba'],['Girona','Girona'],['Grenade','Grenade'],['Guadalajara','Guadalajara'],['Guipúzcoa','Gipuzkoa'],['Huelva','Huelva'],['Huesca','Huesca'],['Jaén','Jaén'],['La Rioja','Province de La Rioja'],['Las Palmas','Las Palmas'],['León','León'],['Lleida','Lleida'],['Lugo','Lugo'],['Madrid','Province de Madrid'],['Melilla','Melilla'],['Murcie','Murcie'],['Málaga','Málaga'],['Navarre','Navarre'],['Ourense','Ourense'],['Palencia','Palencia'],['Pontevedra','Pontevedra'],['Salamanque','Salamanque'],['Santa Cruz de Tenerife','Santa Cruz de Tenerife'],['Ségovie','Ségovie'],['Séville','Séville'],['Soria','Soria'],['Tarragone','Tarragone'],['Teruel','Teruel'],['Tolède','Tolède'],['Valence','Valence'],['Valladolid','Valladolid'],['Vizcaya','Biscaye'],['Zamora','Zamora'],['Zaragoza','Zaragoza'],['Álava','Álava'],['Ávila','Ávila']]"
                  >
                    Espagne
                  </option>
                  <option value="Suède" data-provinces="[]">
                    Suède
                  </option>
                  <option value="Suisse" data-provinces="[]">
                    Suisse
                  </option>
                  <option
                      value="Émirats Arabes Unis"
                      data-provinces="[['Abou Dabi','Abou Dabi'],['Ajman','Ajman'],['Dubaï','Dubaï'],['Fujairah','Fujairah'],['Ras al-Khaimah','Ras al-Khaimah'],['Charjah','Charjah'],['Umm al-Quwain','Umm al-Quwain']]"
                  >
                    Émirats Arabes Unis
                  </option>
                  <option
                      value="Royaume-Uni"
                      data-provinces="[['Forces britanniques','Forces britanniques'],['Angleterre','Angleterre'],['Irlande du Nord','Irlande du Nord'],['Écosse','Écosse'],['Pays de Galles','Pays de Galles']]"
                  >
                    Royaume-Uni
                  </option>
                  <option
                      value="États-Unis"
                      data-provinces="[['Alabama','Alabama'],['Alaska','Alaska'],['Samoa américaines','Samoa américaines'],['Arizona','Arizona'],['Arkansas','Arkansas'],['Forces armées Amériques','Forces armées Amériques'],['Forces armées Europe','Forces armées Europe'],['Forces armées Pacifique','Forces armées Pacifique'],['Californie','Californie'],['Colorado','Colorado'],['Connecticut','Connecticut'],['Delaware','Delaware'],['District de Columbia','Washington DC'],['États fédérés de Micronésie','Micronésie'],['Floride','Floride'],['Géorgie','Géorgie'],['Guam','Guam'],['Hawaï','Hawaï'],['Idaho','Idaho'],['Illinois','Illinois'],['Indiana','Indiana'],['Iowa','Iowa'],['Kansas','Kansas'],['Kentucky','Kentucky'],['Louisiane','Louisiane'],['Maine','Maine'],['Îles Marshall','Îles Marshall'],['Maryland','Maryland'],['Massachusetts','Massachusetts'],['Michigan','Michigan'],['Minnesota','Minnesota'],['Mississippi','Mississippi'],['Missouri','Missouri'],['Montana','Montana'],['Nebraska','Nebraska'],['Nevada','Nevada'],['New Hampshire','New Hampshire'],['New Jersey','New Jersey'],['Nouveau-Mexique','Nouveau-Mexique'],['New York','New York'],['Caroline du Nord','Caroline du Nord'],['Dakota du Nord','Dakota du Nord'],['Îles Mariannes du Nord','Îles Mariannes du Nord'],['Ohio','Ohio'],['Oklahoma','Oklahoma'],['Oregon','Oregon'],['Palau','Palau'],['Pennsylvanie','Pennsylvanie'],['Porto Rico','Porto Rico'],['Rhode Island','Rhode Island'],['Caroline du Sud','Caroline du Sud'],['Dakota du Sud','Dakota du Sud'],['Tennessee','Tennessee'],['Texas','Texas'],['Utah','Utah'],['Vermont','Vermont'],['Îles Vierges','Îles Vierges des États-Unis'],['Virginie','Virginie'],['Washington','Washington'],['Virginie-Occidentale','Virginie-Occidentale'],['Wisconsin','Wisconsin'],['Wyoming','Wyoming']]"
                  >
                    États-Unis
                  </option>
                  <option value="Vietnam" data-provinces="[]">
                    Vietnam
                  </option>
                </select>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="province"
                    name="province"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="province"
                >
                  Province
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="AddressZipNew"
                    name="AddressZipNew"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="AddressZipNew"
                >
                  Code postal/ZIP
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                    className="tf-field-input tf-input"
                    placeholder=" "
                    type="text"
                    id="phone"
                    name="phone"
                />
                <label
                    className="tf-field-label fw-4 text_black-2"
                    htmlFor="phone"
                >
                  Téléphone
                </label>
              </div>
            </div>
            <div className="box-field text-start">
              <div className="box-checkbox fieldset-radio d-flex align-items-center gap-8">
                <input
                    type="checkbox"
                    id="check-edit-address"
                    className="tf-check"
                />
                <label htmlFor="check-edit-address" className="text_black-2 fw-4">
                  Définir comme adresse par défaut.
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-20">
              <button type="button" className="tf-btn btn-fill animate-hover-btn">
                Mettre à jour l'adresse
              </button>
              <span
                  className="tf-btn btn-fill animate-hover-btn btn-hide-edit-address"
                  onClick={() => setactiveAdd(false)}
              >
              Annuler
            </span>
            </div>
          </form>
        </div>
      </div>
  );
}
