var React = require('react'),
    ReactDOM = require('react-dom');

var siteInformation = {
    logo: 'Logo',
    'title': 'Title',
    'description': 'Description'
};

var links = [
    {label: 'GitHub', url: 'https://github.com/jbuget'},
    {label: 'Twitter', url: 'https://twitter.com/jbuget'},
    {label: 'Linkedin', url: 'https://fr.linkedin.com/in/jérémy-buget-b0903113'}
];

var NavigationLink = React.createClass({
    render: function () {
        return (
            <li>
                <a href={this.props.link.url} target="_blank">{this.props.link.label}</a>
            </li>
        );
    }
});

var Sidebar = React.createClass({
    render: function () {
        var site = this.props.siteInformation;

        var links = [];

        this.props.links.forEach(function (link) {
            links.push(<NavigationLink link={link} key={link.label} />);
        });

        return (
            <div>
                <div>
                    <p><a href="/" className="site-logo"><img src={site.logo}></img></a></p>
                    <h2 className="site-title">{site.title}</h2>
                    <h3 className="site-description">{site.description}</h3>
                </div>
                <div id="navbar">
                    <ul>{links}</ul>
                </div>
            </div>
        );
    }
});

ReactDOM.render(<Sidebar siteInformation={siteInformation} links={links}/>, document.getElementById('sidebar'));
