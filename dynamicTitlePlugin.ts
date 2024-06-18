export default function dynamicTitlePlugin() {
    return {
        name: 'dynamic-title-plugin',
        transformIndexHtml(html: string) {
            const modifiedHtml = html.replace('{{pageTitle}}', 'Portfolio');
            const modifiedHtml2 = modifiedHtml.replace(/<link rel="icon".*?>/i, '<link rel="icon" href="images/logo/iBank_icon.png">');
            return modifiedHtml2;
        },
    };
}