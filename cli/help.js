const help = `
Usage:

$ broker <command> [flags]

This will run the Snyk broker that allows requests to be proxied to your
internal environment, using controls to configure what types of requests are
allowed and to what end point.

The broker outputs logs in single-line JSON form to \`stdout\`. By default,
the broker runs with \`info\` level logging. Set the desired logging verbosity
by setting the \`LOG_LEVEL\` environment variable to one of the following:
\`debug\`, \`info\`, \`warn\`, \`error\`, \`fatal\`. Only the selected log level
and UP will be logged.

Commands:

client ............... run the broker in client mode
server ............... run the broker in server mode
init <template> ...... generate the client broker files required for a given
                       template. Supported templates: github-com,
                       github-enterprise, bitbucket-server, gitlab

Flags:

-h, --help ........... Print this help text

Options:

--port PORT .......... specify a local port for the broker to listen on,
                       defaults to port 7341

Example:

$ broker client --port 8000

For more details on configuration see http://github.com/snyk/broker
`;

module.exports = { help };
