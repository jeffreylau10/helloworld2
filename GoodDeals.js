"use strict";

var GoodDealsModule = GoodDealsModule || {};

GoodDealsModule.Load = function () {

var GoodDeal = React.createClass({
    displayName: "GoodDeal",
    render: function render() {
        return React.createElement(
            "div",
            { className: "col-md-12" },
            React.createElement(
                "div",
                { className: "item" },
                React.createElement(
                    "a",
                    { href: "employeematters_gooddeals_uss.html", className: "title" },
                    React.createElement(
                        "h5",
                        null,
                        this.props.appitem.Title
                    )
                ),
                React.createElement(
                    "span",
                    { className: "validperiod" },
                    "Promo Period: ",
                    this.props.appitem.PromoPeriod
                ),
                React.createElement(
                    "span",
                    { className: "author" },
                    "posted by ",
                    this.props.appitem.PostedBy
                ),
                React.createElement(
                    "span",
                    { className: "timeago" },
                    "in ",
                    this.props.appitem.PostedDate
                )
            )
        );
    }
});

var GoodDeals = React.createClass({
    displayName: "GoodDeals",

    mixins: [
        //required
        //ComponentVisibilityMixin
    ],
    getInitialState: function getInitialState() {
        // returning sample data before the actual is retrieved via fetch
        return {
            promodata: [{ "Title": "Lorem Ipsum 1", "PromoPeriod": "01 Dec 2016 to 02 Jan 2017", "PostedBy": "MSS-PSC", "PostedDate": "29-12-2016 5:08pm" }, { "Title": "Lorem Ipsum 2", "PromoPeriod": "25 Oct 2016 to 04 Nov 2016", "PostedBy": "MSS-PSC", "PostedDate": "29-12-2016 5:08pm" }, { "Title": "Lorem Ipsum 3", "PromoPeriod": "28 Oct 2016 to 31 Mar 2017", "PostedBy": "MSS-PSC", "PostedDate": "29-12-2016 5:08pm" }]
        };
    },
    retrieveFromWebService: function retrieveFromWebService() {
        $pnp.sp.web.lists.getByTitle('eApps').items.get().then(function (data) {
            //that.setState.appsdata = data;
            console.log('inside pnp js');
            console.log(data);
        });
        /*var that = this;
        var url = 'sampledata.json';
        fetch(url).then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function (data) {
            that.setState({ promodata: data });
        });*/
    },
    componentVisibilityChanged: function componentVisibilityChanged() {
        console.log('scroll into view');
        this.retrieveFromWebService();
        // once we get the value once, we don't need to use this anymore
        this.disableVisibilityHandling();
    },
componentDidMount: function componentDidMount() {
    this.retrieveFromWebService();
},
    renderPromotions: function renderPromotions() {
        return this.state.promodata.map(function (promoitem) {
            return React.createElement(GoodDeal, { appitem: promoitem });
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "col-md-12 col-sm-6 col-xs-6 latesttrendinggroupbox" },
            React.createElement(
                "div",
                { className: "latesttrendinggroup latest" },
                React.createElement(
                    "div",
                    { className: "col-md-12" },
                    React.createElement(
                        "h4",
                        { className: "subheader" },
                        "LATEST"
                    )
                ),
                this.renderPromotions()
            )
        );
    }
});

ReactDOM.render(React.createElement(GoodDeals, null), document.getElementById('good_deals_root'));
};