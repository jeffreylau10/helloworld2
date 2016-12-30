"use strict";

var AppsListingModule = AppsListingModule || {};

AppsListingModule.Load = function () {

var AppItem = React.createClass({
    displayName: "AppItem",
    render: function render() {
        return React.createElement(
            "div",
            { "class": "appsitem" },
            React.createElement(
                "div",
                { className: "appslogo" },
                React.createElement(
                    "a",
                    null,
                    React.createElement("img", { src: this.props.appitem.IconURL })
                )
            ),
            React.createElement(
                "div",
                { className: "appsdesc" },
                React.createElement(
                    "h4",
                    null,
                    React.createElement(
                        "a",
                        null,
                        this.props.appitem.Title
                    )
                ),
                React.createElement("p", null)
            ),
            React.createElement(
                "div",
                { className: "appschecked" },
                "Added to My App"
            ),
            React.createElement(
                "div",
                { className: "appsdownload" },
                React.createElement(
                    "a",
                    null,
                    "Instructional Manual\xA0",
                    React.createElement("i", { "class": "glyphicon glyphicon-download-alt" })
                ),
                React.createElement("br", null),
                React.createElement(
                    "a",
                    null,
                    "eLearning Guide\xA0",
                    React.createElement("i", { "class": "glyphicon glyphicon-download-alt" })
                ),
                React.createElement("br", null)
            )
        );
    }
});

var AppsListing = React.createClass({
    displayName: "AppsListing",
    getInitialState: function getInitialState() {
        // returning sample data before the actual is retrieved via fetch
        return {
            appsdata: [{
                "odata.type": "SP.Data.EAppsListItem",
                "odata.id": "150b64f7-ca79-44fc-8189-3bcceb3676a9",
                "odata.etag": "\"5\"",
                "odata.editLink": "Web/Lists(guid'07515136-4d58-4e3a-8df5-6307e1b1a7da')/Items(1)",
                "FileSystemObjectType": 0,
                "Id": 1,
                "ContentTypeId": "0x01005B90068C481B4649BF5E6E51826D3491",
                "Title": "GOMs, Directives & Circulars",
                "Description": "<div class=\"ExternalClassDEDC81EC2B0C484AA8FD411F84259F7D\"><p>​<span>Pellentesque egestas tellus eu est tempus, laoreet finibus quam placerat. Ut vitae dolor eni​m. Etiam velit dui, condimentum in euismod imperdiet.</span>​<br></p></div>​<br>",
                "Category": "My Apps",
                "URL": null,
                "IconURL": "/SiteAssets/eApps/apps-myapps-1%5B1%5D.jpg",
                "ID": 1,
                "Modified": "2016-12-15T12:29:59Z",
                "Created": "2016-11-23T11:27:07Z",
                "AuthorId": 1073741823,
                "EditorId": 1073741823,
                "OData__UIVersionString": "1.0",
                "Attachments": true,
                "GUID": "52e32f33-c2b6-4acf-9665-d1c2a4257c43"
            }, {
                "odata.type": "SP.Data.EAppsListItem",
                "odata.id": "79d7b91f-075f-4978-a9ac-4e478e5d00aa",
                "odata.etag": "\"6\"",
                "odata.editLink": "Web/Lists(guid'07515136-4d58-4e3a-8df5-6307e1b1a7da')/Items(2)",
                "FileSystemObjectType": 0,
                "Id": 2,
                "ContentTypeId": "0x01005B90068C481B4649BF5E6E51826D3491",
                "Title": "Athena",
                "Description": "<div class=\"ExternalClassD0D881836B9A4C708BDD175DBB73E6A9\"><p>​<span>Pellentesque egestas tellus eu est tempus, laoreet finibus quam placerat. Ut vitae dolor enim. Etiam velit dui, condimentum in euismo​d imperdiet.</span></p>​\n</div>",
                "Category": "My Apps",
                "URL": null,
                "IconURL": "/SiteAssets/eApps/apps-myapps-2%5B1%5D.jpg",
                "ID": 2,
                "Modified": "2016-12-15T12:30:10Z",
                "Created": "2016-11-23T11:29:46Z",
                "AuthorId": 1073741823,
                "EditorId": 1073741823,
                "OData__UIVersionString": "1.0",
                "Attachments": true,
                "GUID": "754b4882-cf8a-4e65-bc1f-b1b804349267"
            }]
        };
    },
    componentDidMount: function componentDidMount() {
        var that = this;
        $pnp.sp.web.lists.getByTitle('eApps').items.get().then(function(data){                        
            that.setState({ appsdata: data});            
        });
    },
    renderApps: function renderApps() {
        
        return this.state.appsdata.map(function (appitem) {
            return React.createElement(AppItem, { appitem: appitem });
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                { className: "maincontent_heading", id: "MYAPPS_EmployeeServices" },
                React.createElement(
                    "div",
                    { className: "box_title_heading" },
                    "Employee Services"
                ),
                React.createElement(
                    "div",
                    { className: "box_allview_wrapper" },
                    "\xA0"
                )
            ),
            React.createElement(
                "div",
                { className: "appsgroup" },
                this.renderApps()
            )
        );
    }
});

ReactDOM.render(React.createElement(AppsListing, null), document.getElementById('root'));

}