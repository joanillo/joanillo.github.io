// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"xBq6":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// al final de tot hi ha un export
function llista_modalitats() {
  var modalitats = [{
    "modalitat": "BTT",
    "value": "btt",
    "id": "chk_btt"
  }, {
    "modalitat": "senderisme",
    "value": "senderisme",
    "id": "chk_senderisme"
  }, {
    "modalitat": "ciclisme",
    "value": "ciclisme",
    "id": "chk_ciclisme"
  }];
  return modalitats;
}

var _default = llista_modalitats;
exports.default = _default;
},{}],"LzJF":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// al final de tot hi ha un export
function llista_rutes() {
  var rutes = [{
    "zona": "TransPirenaica",
    "id": "transpirenaica",
    "rutes": [{
      "ruta": "Transpirinenca. Bonansa-Escalona",
      "fitxer": "TP_09_bonansa-escalona.gpx"
    }, {
      "ruta": "Transpirinenca. Fiscal-Aur??n",
      "fitxer": "TP_11_fiscal-aurin.gpx"
    }, {
      "ruta": "Transpirinenca. Etxalar-Hondarribia",
      "fitxer": "TP_16_etxalar-hondarribia.gpx"
    }, {
      "ruta": "Transpirinenca. Planoles-Bag??",
      "fitxer": "TP_04_planoles-baga.gpx"
    }, {
      "ruta": "Transpirinenca. Izaba-Roncesvalles",
      "fitxer": "TP_14_izaba-roncesvalles.gpx"
    }, {
      "ruta": "Transpirinenca. Albany??-Camprodon",
      "fitxer": "TP_02_albanya-camprodon.gpx"
    }, {
      "ruta": "Transpirinenca. Camprodon-Planoles",
      "fitxer": "TP_03_camprodon-planoles.gpx"
    }, {
      "ruta": "Transpirinenca. Espui-Bonansa",
      "fitxer": "TP_08_espui-bonansa.gpx"
    }, {
      "ruta": "Transpirinenca. Bag??-Noves de Segre",
      "fitxer": "TP_05_bag??-noves_de_segre.gpx"
    }, {
      "ruta": "Transpirinenca. Escalona-Fiscal",
      "fitxer": "TP_10_escalona-fiscal.gpx"
    }, {
      "ruta": "Transpirinenca. Echo-Izaba",
      "fitxer": "TP_13_echo-izaba.gpx"
    }, {
      "ruta": "Transpirinenca. Noves de Segre-Llavors??",
      "fitxer": "TP_06_noves_de_segre-llavorsi.gpx"
    }, {
      "ruta": "Transpirinenca. Roncesvalles-Etxalar",
      "fitxer": "TP_15_roncesvalles-etxalar.gpx"
    }, {
      "ruta": "Transpirinenca. Aur??n-Echo",
      "fitxer": "TP_12_aur??n-echo.gpx"
    }, {
      "ruta": "Transpirinenca. Llavors??-Espui",
      "fitxer": "TP_07_llavors??-espui.gpx"
    }, {
      "ruta": "Transpirinenca. Llan????-Albany??",
      "fitxer": "TP_01_llan??a-albanya.gpx"
    }]
  }, {
    "zona": "Sant Feliu",
    "id": "sant_feliu",
    "rutes": [{
      "ruta": "Sant Feliu de C-Riera de Caldes-Riu Bes??s-Sta Coloma de Gr",
      "fitxer": "st_feliu_de_c-sta_coloma_de_gr.gpx"
    }, {
      "ruta": "St Feliu de Codines-Gallifa-El Farell-Caldes",
      "fitxer": "st_feliu_codines_gallifa_farell_caldes.gpx"
    }, {
      "ruta": "Terrassa-Sant Feliu de Codines",
      "fitxer": "Terrassa-Sant_Feliu_de_Codines.gpx"
    }, {
      "ruta": "Sant Feliu de Codines-Sabadell",
      "fitxer": "sant_feliu_codines_sabadell.gpx"
    }, {
      "ruta": "Centelles - Sant Feliu",
      "fitxer": "centelles_stfeliu.gpx"
    }, {
      "ruta": "TODO St Feliu corriols",
      "fitxer": "todo-st_feliu-corriols.gpx"
    }, {
      "ruta": "St Feliu de Codines-Tenes-Bes??s-BCN",
      "fitxer": "st_feliu_codines-tenes-besos-bcn.gpx"
    }, {
      "ruta": "ToDo-Vacarisses-Sant Feliu de C-2",
      "fitxer": "todo-vacarisses-st_feliu_codines-2.gpx"
    }, {
      "ruta": "Sant Feliu de Codines-Terrassa",
      "fitxer": "Sant_feliu_codines-Terrassa.gpx"
    }, {
      "ruta": "Centelles-Collsuspina-Popa-St Feliu de Codines",
      "fitxer": "Centelles-Collsuspina-Popa-St_Feliu_de_Codines.gpx"
    }, {
      "ruta": "Barcelona - Sant Feliu",
      "fitxer": "bcn_stfeliu_1.gpx"
    }, {
      "ruta": "Vacarisses-Obac-St Llorenc Savall-Gallifa-St Feliu",
      "fitxer": "Vacarisses-Obac-St_Llorenc_Savall-Gallifa-St_Feliu.gpx"
    }, {
      "ruta": "Sant Feliu-La Garriga",
      "fitxer": "st_feliu-la_garriga.gpx"
    }, {
      "ruta": "St Feliu-Volta a la Popa",
      "fitxer": "st_feliu_cod-volta_a_la_popa.gpx"
    }, {
      "ruta": "Centelles-Collsuspina-Sta Coloma S-Castellter??ol-St Juli?? Uixols-St Feliu",
      "fitxer": "centelles-collsus-sta_col_sasserra-castelltercol-uixols.gpx"
    }, {
      "ruta": "Castellter??ol, Sant Juli?? d'??ixols i Sant Quirze Safaja",
      "fitxer": "castelltercol-sant-julia-duixols-i-sant-quirze-safaja.gpx"
    }, {
      "ruta": "St_Feliu_Codines-Poses-Matafaluga-Gallifa",
      "fitxer": "St_Feliu_Codines-Poses-Matafaluga-Gallifa.gpx"
    }, {
      "ruta": "Sant Feliu de Codines-Caldes-Sentmenat-Castellar-St Sebasti?? de Montmajor",
      "fitxer": "st_feliu-caldes-castellar-montmajor.gpx"
    }, {
      "ruta": "Volta per Sant Feliu 1",
      "fitxer": "volta_per_st_feliu_1.gpx"
    }, {
      "ruta": "Sant Feliu-La Garriga v2",
      "fitxer": "st_feliu-la_garriga_v2.gpx"
    }, {
      "ruta": "Sta Coloma Gr-Vall del Tenes-St Feliu",
      "fitxer": "sta_coloma-tenes-st_feliu.gpx"
    }, {
      "ruta": "St Feliu-Uny??-Ull??",
      "fitxer": "st_miquel_del_fai_uno_ulla.gpx"
    }]
  }, {
    "zona": "Bergued??",
    "id": "bergueda",
    "rutes": [{
      "ruta": "Cercs - Peguera - Cercs",
      "fitxer": "cercs-peguera.gpx"
    }, {
      "ruta": "Les Rovires de Baix 2",
      "fitxer": "les_rovires_de_baix_2.gpx"
    }, {
      "ruta": "ToDo-Montclar",
      "fitxer": "todo-montclar.gpx"
    }, {
      "ruta": "ToDo - El Collet-Vallcebre-Coll de Pradell-Saldes-Riera Saldes",
      "fitxer": "todo-el_collet-vallcebre-coll_de_pradell-saldes-riera_saldes.gpx"
    }, {
      "ruta": "ToDo - Bag??-Gr??ixer-Escriu-Pend??s-Bellver",
      "fitxer": "todo-baga-greixer-escriu-pendis-bellver.gpx"
    }, {
      "ruta": "ToDo-Sant Jaume de Frontany?? - Gombr??n v2",
      "fitxer": "todo-gombren-sant-jaume-de-frontanya-gombren_v2.gpx"
    }, {
      "ruta": "ToDo-Baix_Bergued??",
      "fitxer": "todo-baix_bergueda.gpx"
    }, {
      "ruta": "ToDo - st_maurici_la_quar-portella",
      "fitxer": "todo-st_maurici_la_quar-portella.gpx"
    }, {
      "ruta": "ToDo - Ripoll-Les Rovires",
      "fitxer": "todo-ripoll-les_rovires.gpx"
    }, {
      "ruta": "ToDo - Coll de Pal-Pobla de Lillet",
      "fitxer": "todo-coll_de_pal-pobla_de_lillet.gpx"
    }, {
      "ruta": "ToDo-Sant Jaume de Frontany?? - Gombr??n v1",
      "fitxer": "todo-gombren-sant-jaume-de-frontanya-gombren_v1.gpx"
    }, {
      "ruta": "ToDo - Volta als Rasos de Tubau",
      "fitxer": "todo-volta_rasos_tubau.gpx"
    }, {
      "ruta": "Ripoll-Les Rovires de Baix",
      "fitxer": "ripoll-les_rovires_de_baix.gpx"
    }, {
      "ruta": "La Sala-Sta Cec??lia de Riutort-Coll Cerqueda-Coll Portelletes",
      "fitxer": "la_sala-sta_cecilia_riutort-coll_cerqueda-coll_portelletes.gpx"
    }, {
      "ruta": "La Catllar??s 2018",
      "fitxer": "la-catllaras-2018.gpx"
    }, {
      "ruta": "Les Rovires-Borred?? a peu",
      "fitxer": "les_rovires-borreda-a_peu.gpx"
    }, {
      "ruta": "ToDo-morral_de_montsent_el_banc",
      "fitxer": "todo-morral_de_montsent_el_banc.gpx"
    }, {
      "ruta": "ToDo - Volta a la Serra d'Ensija",
      "fitxer": "todo-volta_serra_ensija.gpx"
    }, {
      "ruta": "Riutort - Pobla de Lillet",
      "fitxer": "riutort_pobla_de_lillet.gpx"
    }, {
      "ruta": "ToDo - Pobla de Lillet-Gombr??n-Castellar de n'Hug",
      "fitxer": "todo-pobla_lillet-gombren-castellar_nhug.gpx"
    }, {
      "ruta": "ToDo - Llacuna-Queralt-Sant Mart?? de Tous",
      "fitxer": "todo-llacuna-queralt-st_marti_de_tous.gpx"
    }, {
      "ruta": "ToDo - Llu??an??s Fer??stec 2019 llarga",
      "fitxer": "todo-llucanes-ferestec-2019-llarga.gpx"
    }, {
      "ruta": "Les Rovires de Baix 1",
      "fitxer": "les_rovires_de_baix_1.gpx"
    }, {
      "ruta": "ToDo - Coll de Pradell - Volta als Cingles de Costafreda",
      "fitxer": "todo-coll_pradell-volta_cingles_costafreda.gpx"
    }, {
      "ruta": "ToDo - Bag??-Gisclareny-Coll de Bauma-El Collell-Riera de Saldes",
      "fitxer": "todo-baga-gisclareny-coll_bauma-el_collell-riera_saldes.gpx"
    }, {
      "ruta": "ToDo - Coll de Pal-Gavarr??s-Espelt",
      "fitxer": "todo-coll_de_pal-gavarros-espelt.gpx"
    }, {
      "ruta": "ToDo - Casserres-Montclar",
      "fitxer": "todo-Casserres-Montclar.gpx"
    }, {
      "ruta": "ToDo - Camprodon-Les Rovires",
      "fitxer": "todo-camprodon-les_rovires.gpx"
    }, {
      "ruta": "Les Rovires de Baix 3",
      "fitxer": "les_rovires_de_baix_3.gpx"
    }]
  }, {
    "zona": "Barcelona",
    "id": "barcelona",
    "rutes": [{
      "ruta": "Vallcarca-Tibidabo-PiXandri-Sol-i-aire",
      "fitxer": "vallcarca-tibidabo-pixandri-sol-i-aire.gpx"
    }, {
      "ruta": "Baixador de Vallvidrera-Sitges",
      "fitxer": "baixador_vallvidrera-sitges.gpx"
    }, {
      "ruta": "Volta per Collserola 2",
      "fitxer": "volta_per_collserola_2.gpx"
    }, {
      "ruta": "Volta per Collserola 4 corriols",
      "fitxer": "volta_per_collserola_4-corriols.gpx"
    }, {
      "ruta": "ToDo-Volta per Collserola 5",
      "fitxer": "todo-volta_per_collserola_5.gpx"
    }, {
      "ruta": "Mercabarna-Delta del Llobregat",
      "fitxer": "mercabarna-delta_llobregat.gpx"
    }, {
      "ruta": "Volta per Collserola",
      "fitxer": "volta_per_collserola_1.gpx"
    }, {
      "ruta": "Poblat Ib??ric Puig Castellar",
      "fitxer": "poblat-iberic-puig-castellar.gpx"
    }, {
      "ruta": "Baixador Vallvidrera-Delta Llobregat",
      "fitxer": "baixador_vallvidrera_delta_llobregat.gpx"
    }, {
      "ruta": "Integral Carretera de les Aig??es 2",
      "fitxer": "integral_carretera_aigues_2.gpx"
    }, {
      "ruta": "Corriols de la Vall de Sant Just",
      "fitxer": "corriolada_per_sant_just_desvern.gpx"
    }, {
      "ruta": "La Floresta-Papiol-St Bartomeu-Ol??rdola-Baixador Vallvidrera",
      "fitxer": "la_floresta-papiol-st_bartomeu-olerdola-baixador_vallvidrera.gpx"
    }, {
      "ruta": "Trialerada per Collserola",
      "fitxer": "trialerada-per-collserola.gpx"
    }, {
      "ruta": "Integral Carretera de les Aig??es 3",
      "fitxer": "integral_carretera_aigues_3.gpx"
    }, {
      "ruta": "Integral Carretera de les Aig??es 1",
      "fitxer": "integral_carretera_aigues_1.gpx"
    }, {
      "ruta": "Baixador_Vallvidrera-Turons_Can_Pasqual-St_Feliu-Passeig_Aig??es",
      "fitxer": "Baixador_Vallvidrera-Turons_Can_Pasqual-St_Feliu-Passeig_Aig??es.gpx"
    }, {
      "ruta": "Santa Coloma-El Masnou-Passeig Mar??tim",
      "fitxer": "sta_coloma-masnou-pg_maritim.gpx"
    }, {
      "ruta": "Granollers-Sta Coloma de Gr",
      "fitxer": "granollers-sta_coloma_gr.gpx"
    }, {
      "ruta": "Entreno Collserola Oriental v2",
      "fitxer": "entreno_collserola_oriental_v2.gpx"
    }, {
      "ruta": "Volta per Collserola-4 ermites",
      "fitxer": "volta_collserola_4_ermites.gpx"
    }, {
      "ruta": "Volta per Collserola 3",
      "fitxer": "volta_per_collserola_3.gpx"
    }]
  }, {
    "zona": "Port de la Selva",
    "id": "port_de_la_selva",
    "rutes": [{
      "ruta": "Port de la Selva-Cala Taballera-Mas de Birba-GR92",
      "fitxer": "port_selva-taballera-birba-gr92.gpx"
    }, {
      "ruta": "Port de la Selva-Vall de la Santa Creu",
      "fitxer": "port_selva-vall_sta_creu.gpx"
    }, {
      "ruta": "ToDo - Camprodon - Port de la Selva /10-09-11",
      "fitxer": "todo-camprodon-port-de-la-selva-10-09-11.gpx"
    }, {
      "ruta": "Port de la Selva-3 d??lmens de Taballera",
      "fitxer": "port_selva-3_dolmens_taballera.gpx"
    }, {
      "ruta": "Port de la Selva-Selva Mar-Coll Bombo-Pla Causa-Puig Sardina-Roses-Mas Romanyac-GR92",
      "fitxer": "port_selva-coll_bombo-pla_causa-puig_sardina-roses-mas_romanyac-GR9.gpx"
    }, {
      "ruta": "Port de la Selva-St Baldiri-Cala_Taballera-Cadaqu??s-GR92",
      "fitxer": "port_selva-st_baldiri-cala_taballera-cadaques-GR92.gpx"
    }, {
      "ruta": "Port de la Selva-carretera de Roses a Coll de Perafita",
      "fitxer": "port_selva-carretera_roses_perafita.gpx"
    }, {
      "ruta": "Port de la Selva-Selva de Mar-Mas Romanyac-Coll de Perafita-Cadaqu??s-GR92",
      "fitxer": "port_selva-selva_mar-mas_romanyac-perafita-cadaques-GR92.gpx"
    }, {
      "ruta": "Port Selva-St Pere de Rodes-Llan????-Puig Tifeu-Garbet",
      "fitxer": "port_selva-st_pere_de_rodes-llan??a-puig_tifeu-garbet.gpx"
    }]
  }, {
    "zona": "Altres",
    "id": "altres",
    "rutes": [{
      "ruta": "Montnegre Open MTB 50Km",
      "fitxer": "montnegreopenmtb_50.gpx"
    }, {
      "ruta": "Monegros Nord",
      "fitxer": "Monegros-nord.gpx"
    }, {
      "ruta": "Pujada a la Mola",
      "fitxer": "pujada_a_la_mola.gpx"
    }, {
      "ruta": "La Portals 2013 (4a Volta a Montserrat)",
      "fitxer": "la-portals-2013-4a-volta-a-la-montanya-de-montserrat-en-btt.gpx"
    }, {
      "ruta": "Aiguafreda-Collformic-Pla de la Calma-Tagamanent",
      "fitxer": "Aiguafreda-Collformic-Pla_de_la_Calma-Tagamanent.gpx"
    }, {
      "ruta": "Montnegre Open MTB 32Km",
      "fitxer": "montnegreopenmtb_32.gpx"
    }, {
      "ruta": "Llimiana, Serra Barcedana, Gercles",
      "fitxer": "llimiana-serra-barcedana-gercles.gpx"
    }, {
      "ruta": "La S??nia-Casetes Velles-Fredes-La S??nia",
      "fitxer": "la_senia-casetes_velles-fredes-la_senia.gpx"
    }, {
      "ruta": "Maresme Challenge 2013",
      "fitxer": "maresme_challenge_2013.gpx"
    }, {
      "ruta": "Canovelles-Samalus-Roc Centelles-C??noves-Marata",
      "fitxer": "Canovelles-Samalus-Roc_Centelles-Canoves-Marata.gpx"
    }, {
      "ruta": "Monegros Sud",
      "fitxer": "Monegros-sud.gpx"
    }, {
      "ruta": "Garraf - Begues - Garraf",
      "fitxer": "garraf-begues-garraf.gpx"
    }, {
      "ruta": "Granollers-Roc de Centelles",
      "fitxer": "granollers-roc_de_centelles.gpx"
    }, {
      "ruta": "KKH-Karakorum Highway",
      "fitxer": "KKH.gpx"
    }, {
      "ruta": "Els tres refugis: Coma de Vaca, Ull de Ter, Ras de Caran????",
      "fitxer": "els_tres_refugis.gpx"
    }, {
      "ruta": "Marxa dels Castells 2010",
      "fitxer": "marxa_castells.gpx"
    }, {
      "ruta": "Integral megal??tica de Vallromanes",
      "fitxer": "integral_megalitica_vallromanes.gpx"
    }, {
      "ruta": "ToDo - Calaf-Cellers-Quadrells",
      "fitxer": "todo-calaf-cellers-quadrells.gpx"
    }, {
      "ruta": "ToDo - Calaf-Rubi??-Jorba-Copons",
      "fitxer": "todo-calaf-rubio-jorba-copons.gpx"
    }, {
      "ruta": "Santa Coloma de Gr-Sant Andreu de Llavaneres",
      "fitxer": "sta_coloma-st_andreu_llavaneres.gpx"
    }]
  }, {
    "zona": "Bag??",
    "id": "baga",
    "rutes": [{
      "ruta": "Bag??-Gr??ixer-Coll d'Escriu-Empedrats-Bag??",
      "fitxer": "baga-greixer-escriu-empedrats-baga.gpx"
    }, {
      "ruta": "Volta per Broc?? (sector sud)",
      "fitxer": "volta_broca_sector_sud.gpx"
    }, {
      "ruta": "Bag??-Cap del Tossal",
      "fitxer": "baga-cap_del_tossal.gpx"
    }, {
      "ruta": "Coll de Pal-Comafloriu-Xalet Coll de Pal",
      "fitxer": "coll_pal-comafloriu-xalet_coll_de_pal.gpx"
    }, {
      "ruta": "Cambra del Boc",
      "fitxer": "cambra_del_boc.gpx"
    }, {
      "ruta": "Entreno Bag?? 1",
      "fitxer": "entreno_baga_1.gpx"
    }, {
      "ruta": "Bag??-Collet d'A??na-El Jou-Fumanya-Vallcebre",
      "fitxer": "baga-collet_aina-jou-fumanya-vallcebre.gpx"
    }, {
      "ruta": "Bag??-Broc??-Collada Grossa-L'Estret-Riutort",
      "fitxer": "baga-broca-collada_grossa-estret-riutort.gpx"
    }, {
      "ruta": "Via Nicolau",
      "fitxer": "via_nicolau.gpx"
    }, {
      "ruta": "Bag??-Coll de Turbians-Coll de la Bena-St Mart?? del Puig",
      "fitxer": "baga-coll_turbians-coll_bena-st_marti_puig.gpx"
    }, {
      "ruta": "Cal Cerdanyola-Monnell-Murcurols-El Puig",
      "fitxer": "cal_cerdanyola-monnell-murcurols-el_puig.gpx"
    }, {
      "ruta": "Transpirenaica en BTT Etapa 5 Bag??-Noves de Segre",
      "fitxer": "transpirenaica-en-btt-etapa-5-baga-noves-de-segre.gpx"
    }, {
      "ruta": "Bag??-Gresolet-Riu de Saldes",
      "fitxer": "baga-gresolet-riu_saldes.gpx"
    }, {
      "ruta": "Bag??-Pla_Castell-Collada_Grossa-Refugi_Rebost-Millar??s",
      "fitxer": "Baga-Pla_Castell-Collada_Grossa-Refugi_Rebost-Millares.gpx"
    }, {
      "ruta": "Bag??, Broc??, Collada Grossa, Paller de Dalt, Paller de Baix, Bag??",
      "fitxer": "baga-broca-collada-grossa-paller-de-dalt-paller-de-baix-baga.gpx"
    }]
  }];
  return rutes;
}

var _default = llista_rutes;
exports.default = _default;
},{}],"nhcG":[function(require,module,exports) {
"use strict";

var _llista_modalitats = _interopRequireDefault(require("./llista_modalitats.js"));

var _llista_rutes = _interopRequireDefault(require("./llista_rutes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importaci?? dels d??lmens
var body = document.getElementsByTagName("body")[0];
body.addEventListener("load", init(), false);

function init() {
  carregar_modalitats();
  carregar_rutes();
  carregar_ruta_inicial();
}

;

function carregar_modalitats() {
  var modalitats_arr = (0, _llista_modalitats.default)();
  var modalitats_div = document.getElementById("modalitats");
  var str = ""; //for (let i=0; i<modalitats_arr.length;i++) {
  //	str = str + "<label>&nbsp;&nbsp;<input type=\"checkbox\" id=\"" + modalitats_arr[i].id + "\" value=\"" + modalitats_arr[i].value + "\" checked=\"true\">&nbsp;" + modalitats_arr[i].modalitat + "</label><br>";
  //}
  //modalitats_div.innerHTML = str;

  var _loop = function _loop(i) {
    lbl = document.createElement("label");
    br = document.createElement("BR");
    lbl.setAttribute("value", modalitats_arr[i].value);
    lbl.innerText = modalitats_arr[i].modalitat;
    x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    x.setAttribute("value", modalitats_arr[i].value);
    x.setAttribute("id", modalitats_arr[i].id);
    x.setAttribute("checked", true);
    modalitats_div.appendChild(document.createTextNode("\xA0"));
    modalitats_div.appendChild(document.createTextNode("\xA0"));
    modalitats_div.appendChild(document.createTextNode("\xA0"));
    modalitats_div.appendChild(x);
    modalitats_div.appendChild(document.createTextNode("\xA0"));
    modalitats_div.appendChild(document.createTextNode("\xA0"));
    modalitats_div.appendChild(lbl);
    modalitats_div.appendChild(br);
    x.addEventListener("change", function () {
      carregar_modalitat(modalitats_arr[i].value, this.checked);
    }, false);
  };

  for (var i = 0; i < modalitats_arr.length; i++) {
    var lbl;
    var br;
    var x;

    _loop(i);
  }
}

function carregar_rutes() {
  var rutes_arr = (0, _llista_rutes.default)();
  var rutes_ul = document.getElementById("rutes");

  var _loop2 = function _loop2(i) {
    ele_li = document.createElement("LI");
    ele_li.setAttribute("class", "mb-1");
    ele_bt = document.createElement("BUTTON");
    ele_bt.setAttribute("class", "btn d-inline-flex align-items-center rounded collapsed");
    ele_bt.setAttribute("data-bs-toggle", "collapse");
    ele_bt.setAttribute("data-bs-target", "#" + rutes_arr[i].id + "-collapse");
    ele_bt.setAttribute("aria-expanded", "false");
    ele_bt.innerText = rutes_arr[i].zona;
    ele_li.appendChild(ele_bt);
    ele_div = document.createElement("DIV");
    ele_div.setAttribute("class", "collapse");
    ele_div.setAttribute("id", rutes_arr[i].id + "-collapse");

    var _loop3 = function _loop3(j) {
      ele_ul = document.createElement("UL");
      ele_ul.setAttribute("class", "list-unstyled fw-normal pb-1 small");
      ele_li2 = document.createElement("LI"); //ele_li2.innerHTML = "<a href=\"./rutesgps/" + rutes_arr[i].rutes[j].fitxer + "\" class=\"d-inline-flex align-items-center rounded\">" + rutes_arr[i].rutes[j].ruta  + "</a>";

      ele_li2.innerHTML = "<a href=\"#\" class=\"d-inline-flex align-items-center rounded\">" + rutes_arr[i].rutes[j].ruta + "</a>"; //ele_li2.addEventListener("click", function () { return confirm(rutes_arr[i].rutes[j].fitxer); }, false);

      ele_li2.addEventListener("click", function () {
        carregar_ruta(rutes_arr[i].rutes[j].ruta, rutes_arr[i].rutes[j].fitxer);
      }, false);
      ele_ul.appendChild(ele_li2);
      ele_div.appendChild(ele_ul);
    };

    for (var j = 0; j < rutes_arr[i].rutes.length; j++) {
      _loop3(j);
    }

    ele_li.appendChild(ele_div);
    rutes_ul.appendChild(ele_li);
  };

  for (var i = 0; i < rutes_arr.length; i++) {
    var ele_li;
    var ele_bt;
    var ele_div;
    var ele_ul;
    var ele_li2;

    _loop2(i);
  }
}

function carregar_modalitat(modalitat, valor) {
  console.log(modalitat);
  console.log(valor);
}

function carregar_ruta(ruta, fitxer) {
  console.log(ruta);
  var titol = document.getElementById("titol_ruta");
  titol.innerHTML = ruta;
}

function carregar_ruta_inicial() {
  var rutes_arr = (0, _llista_rutes.default)();
  var num1 = Math.floor(Math.random() * rutes_arr.length);
  var num2 = Math.floor(Math.random() * rutes_arr[num1].rutes.length); //console.log(rutes_arr[num1].rutes[num2].ruta);

  var titol = document.getElementById("titol_ruta");
  titol.innerHTML = rutes_arr[num1].rutes[num2].ruta;
  console.log(rutes_arr[num1].rutes[num2].fitxer);
}
},{"./llista_modalitats.js":"xBq6","./llista_rutes.js":"LzJF"}]},{},["nhcG"], null)
//# sourceMappingURL=main.cae0a646.js.map