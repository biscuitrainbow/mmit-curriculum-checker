import * as cheerio from "cheerio";
import Vue from 'vue'
import Vuex from 'vuex'
import App from '../view/content.vue'
import "../css/main.css";
import CompleteLabel from "../components/CompleteLabel";

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log("Receiving Request", request, sender);
        const source = document.all[0].outerHTML;

        const $ = cheerio.load(source);

        const subjectNodes = $("span").parent("h3").next().children("tbody").children("tr");

        // subjectNodes.each((index, node) => console.log($(node).html()));

        const enrolledCourses = [];
        subjectNodes.each((index, node) => {
            const code = $(node).children("td").eq(1).text().trim();
            const name = $(node).children("td").eq(2).text().trim();
            const credit = Number.parseInt($(node).children("td").eq(3).text().trim());
            const grade = $(node).children("td").eq(4).text().trim();

            enrolledCourses.push({
                code,
                name,
                credit,
                grade,
            });
        });
        const container = document.getElementsByClassName("container")[0];

        const vueApp = document.createElement('div');
        vueApp.id = 'app';

        container.appendChild(vueApp);

        Vue.config.productionTip = false
        Vue.component('complete-label', CompleteLabel);
        Vue.use(Vuex)

        const store = new Vuex.Store({
            state: {
                enrolledCourses,
            },
            mutations: {

            }
        })

        new Vue({
            render: (h) => h(App),
            store,
        }).$mount('#app')

        return true;

    }
);