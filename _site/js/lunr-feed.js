var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.ref('id')
});

index.add({
title: null,
content: "\n    \n        404\n        Page not found\n    \n\n",
id: 0
});

index.add({
title: "Threat Intel Roundup",
content: "PwnOverWifi, GravityRAT, BadSpace, iconv\n\nTechnical Summary\nCVE-2024-6044 and CVE-2024-6045 Vulnerabilities in D-Link EAGLE PRO AI and AQUILA PRO AI Devices\n\nTwo critical vulnerabilities, CVE-2024-6044 and CVE-2024-6045, have been identified in the D-Link EAGLE PRO AI and AQUILA PRO AI device families. These vulnerabilities allow for LAN-side arbitrary file reading and elevated unauthenticated access.\n\nBadSpace Malware Delivered via Compromised Websites\n\nBadSpace is a Windows backdoor malware distributed through compromised websites masquerading as fake browser updates.\n\nGravityRAT and HeavyLift Malware Threat Analysis\n\nGravityRAT, a remote access trojan, has evolved to include Android targeting capabilities and integrates with HeavyLift, an Electron-based malware loader.\n\nCritical Vulnerability in PHP - CVE-2024-2961\n\nCVE-2024-2961 is a critical vulnerability in PHP’s iconv() function, which can be exploited through various means including the symfony/polyfill-mbstring library.\n\nForest Compromise Through AMA Abuse\n\nForest compromise through AMA (Azure Monitor Agent) abuse involves exploiting misconfigurations and vulnerabilities in Azure environments.\n\nCritical Security Updates for Microsoft\n\nMicrosoft has released critical security updates to address multiple vulnerabilities across various products.\n\n🚨 Vulnerability of the Week\nMicrosoft has identified a critical vulnerability in the Wi-Fi driver, designated CVE-2024-30078, with a severity rating of 8.8. This vulnerability has not been publicly disclosed, nor has it been observed in active attacks. However, its exploitation is deemed “less likely” according to Microsoft.\n\nAn unauthenticated attacker could exploit this vulnerability by sending a malicious networking packet to an adjacent system using a Wi-Fi networking adapter. Successful exploitation could lead to remote code execution, allowing the attacker to run malware or spyware on the victim’s computer without any physical interaction or authentication.\n\nThis flaw affects every supported version of Windows and poses a significant risk as it allows remote code execution on nearby Windows PCs via their Wi-Fi connections. This makes it particularly attractive to attackers and security researchers alike.\n\n🥵 Malware or Ransomware\n\nGravityRAT, initially disclosed by Talos in 2018, is a Windows-based remote access trojan (RAT) that has since evolved to target Android devices by 2019. Its development and enhancement over the years have been continuous, with new capabilities being added regularly. This RAT has been primarily used by suspected Pakistani threat actors to target Indian entities and individuals, with no evidence suggesting it is a commodity or open-source malware. This exclusivity points to its likely use by a specific group of threat actors, possibly tied to state-sponsored activities.\n\nOur comprehensive analysis of Operation Celestial Force indicates that GravityRAT has been active since 2016, targeting victims through various means, including malicious websites masquerading as legitimate Android applications. These websites, some of which were registered as recently as January 2024, distribute the malware through download links shared on social media channels. Upon installation, the trojan registers the infected device with a command-and-control (C2) server, concealing its true location using Cloudflare services. GravityRAT’s evolving capabilities include sending detailed device information to the C2, reading and uploading SMS data, call logs, specific file formats, and even deleting contacts and logs to cover its tracks.\n\nIn parallel, the operation also utilizes an Electron-based malware loader known as HeavyLift. This loader acts as a stage-one malware component, downloading and installing additional malicious implants from the same C2 servers that control GravityRAT. HeavyLift is introduced through executables disguised as legitimate application installers. It conducts preliminary system checks and, depending on the operating system (macOS or Windows), sets specific HTTP User-Agents and collects system information. On macOS, it leverages osascript for privilege escalation, while on Windows, it creates scheduled tasks for persistence.\n\nHeavyLift employs various anti-analysis techniques, including checks for virtual environments and specific keywords associated with virtualization software. If detected, the malware ceases operation to avoid analysis. This sophisticated approach underscores the advanced nature of the threat actors behind these campaigns. Both GravityRAT and HeavyLift highlight the necessity for robust security measures, including up-to-date anti-malware tools, user education on phishing and social engineering tactics, and rigorous monitoring of network traffic for suspicious activities.\n\n🟥 1Day\n\nCVE-2024-2961 is a critical vulnerability affecting the iconv() function in PHP, a widely-used programming language for web development. This vulnerability not only impacts iconv() but also potentially its sibling functions, and a popular PHP extension called mbstring. The vulnerability has significant implications for web applications and frameworks that rely on these functions and extensions.\n\nDirect Calls to iconv()\n\nThe iconv() function, used for character set conversion, is directly exploitable. This function is essential for many web applications that handle various character encodings.\n\nSibling Functions\n\nFunctions related to iconv(), such as iconv_strrpos(), iconv_substr(), and others, may also be vulnerable. These functions should be reviewed for potential security issues.\n\nmbstring Extension\n\nThe mbstring extension, written in C, allows manipulation of strings under various charsets and performs character set conversions. It is widely used in many frameworks and CMSes.\n\nsymfony/polyfill-mbstring Project When mbstring is not installed (which requires superuser rights), developers can use the symfony/polyfill-mbstring project. This project mimics the mbstring API using PHP and relies on iconv() for character set conversion. This makes applications using symfony/polyfill-mbstring vulnerable to CVE-2024-2961.\n\n🕯️ The Topic of the Week\n\n\n\nCybersecurity researchers have uncovered a malicious campaign leveraging legitimate-but-compromised websites to distribute a Windows backdoor known as BadSpace under the guise of fake browser updates. According to German cybersecurity firm G DATA, the threat actor behind this campaign uses a multi-stage attack chain that includes an infected website, a command-and-control (C2) server, fake browser update prompts, and a JScript downloader to deploy the backdoor onto victims’ systems.\n\nThe attack begins with a compromised website, often built on platforms such as WordPress, where injected code determines if a user is visiting for the first time. Upon a first-time visit, the injected code collects device information, IP address, user-agent, and location, and transmits this data to a hard-coded domain through an HTTP GET request. If the server detects a new user, it responds by overlaying the webpage with a fake Google Chrome update pop-up window. This pop-up either directly drops the malware or deploys a JavaScript downloader that subsequently installs BadSpace.\n\nDetailed analysis of the C2 servers linked to this campaign reveals connections to SocGholish (also known as FakeUpdates), a well-known JavaScript-based downloader malware. SocGholish shares a similar propagation mechanism, further linking the two campaigns. BadSpace itself is equipped with several sophisticated features: it performs anti-sandbox checks, establishes persistence using scheduled tasks, and is capable of harvesting system information. The malware can also process commands to take screenshots, execute instructions via cmd.exe, read and write files, and delete the scheduled task to evade detection.\n\nThis campaign underscores the importance of maintaining robust security practices, especially on websites vulnerable to compromise. Organizations and individuals are advised to keep their web platforms up to date, use security plugins, and regularly scan for vulnerabilities. Users should be cautious of unexpected browser update prompts and verify updates through official channels. Implementing multi-layered security solutions and conducting regular security awareness training can help mitigate the risks posed by threats like BadSpace.\n",
id: 1
});

index.add({
title: "Threat Intel Roundup",
content: "Weakly News\n\n10 Dec 2024\n\nThreat Intel Roundup Weakly Update:\n10 Dec 2024\n\n\n  PwnOverWifi\n  GravityRAT\n  BadSpace\n  iconv\n\n",
id: 2
});

index.add({
title: "What is Threat Radar?",
content: "What is Threat Radar?\n\nA collection of services that facilitate the workflow for continuous delivery pipelines.\n\n\n    \n        Secure Continuous Delivery\n        Screwdriver treats Continuous Delivery as a first-class citizen in your build pipeline.\n        Easily define the path that your code takes from Pull Request to Production.\n    \n    \n        \n    \n\n",
id: 3
});

index.add({
title: "Home",
content: "\n    \n    Welcome to ThreatRadar!\n    Threat Spot. Detect.\n\n\n\n    \n        User Guide\n        If you'd like to learn threat intelligence, please visit our Guides(Soon).\n    \n    \n        Threats Update\n        To find more information about Threat Updates,\n        visit the Threats Update section.\n    \n    \n        APT Wiki\n        To learn more about APT and TTPs, visit the APT Wiki section.\n    \n\n\n",
id: 4
});

index.add({
title: null,
content: "var index = lunr(function () {\n  this.field('title')\n  this.field('content', {boost: 10})\n  this.ref('id')\n});\n{% assign count = 0 %}{% for page in site.pages %}\nindex.add({\ntitle: {{page.title | jsonify}},\ncontent: {{page.content | strip_html | jsonify}},\nid: {{count}}\n});{% assign count = count | plus: 1 %}\n{% endfor %}\n\nvar store = [{% for page in site.pages %}{\n  \"title\": {{page.title | jsonify}},\n  \"url\": {{ page.url | jsonify }},\n  \"summary\": {{ page.content | strip_html | truncatewords: 20 | jsonify }},\n  \"menu\": \"{{page.menu}}\"\n}{% unless forloop.last %},{% endunless %}{% endfor %}]\nconsole.log(store[1].title);\nconsole.log(store[1].summary);\n// builds search\n\n$(document).ready(function() {\n  $('#search').on('keyup', function () {\n    var resultdiv = $('#results');\n    var res_count = 0;\n    // Get query\n    var query = $(this).val();\n    // Search for it\n    var result = index.search(query);\n    // Show results\n    resultdiv.empty();\n    // Loop through, match, and add results\n    for (var item in result) {\n      var ref = result[item].ref;\n      if(store[ref].menu == page_menu && store[ref].url != '/404.html') {\n        var searchitem = ''+store[ref].title+''+store[ref].summary+'';\n        resultdiv.append(searchitem);\n        res_count = res_count + 1;\n      }\n    }\n    if (res_count == 0) {\n        var notfound = 'No results found';\n        resultdiv.append(notfound);\n    }\n  });\n});\n",
id: 5
});


var store = [{
  "title": null,
  "url": "/404.html",
  "summary": "\n    \n        404\n        Page not found\n    \n\n",
  "menu": "menu"
},{
  "title": "Threat Intel Roundup",
  "url": "/threats-update/11-01-2024/",
  "summary": "PwnOverWifi, GravityRAT, BadSpace, iconv Technical Summary CVE-2024-6044 and CVE-2024-6045 Vulnerabilities in D-Link EAGLE PRO AI and AQUILA PRO AI Devices...",
  "menu": "menu"
},{
  "title": "Threat Intel Roundup",
  "url": "/threats-update/",
  "summary": "Weakly News\n\n10 Dec 2024\n\nThreat Intel Roundup Weakly Update:\n10 Dec 2024\n\n\n  PwnOverWifi\n  GravityRAT\n  BadSpace\n  iconv\n\n",
  "menu": "menu"
},{
  "title": "What is Threat Radar?",
  "url": "/about/",
  "summary": "What is Threat Radar? A collection of services that facilitate the workflow for continuous delivery pipelines. Secure Continuous Delivery Screwdriver...",
  "menu": "menu"
},{
  "title": "Home",
  "url": "/",
  "summary": "Welcome to ThreatRadar! Threat Spot. Detect. User Guide If you'd like to learn threat intelligence, please visit our Guides(Soon). Threats...",
  "menu": "menu"
},{
  "title": null,
  "url": "/js/lunr-feed.js",
  "summary": "var index = lunr(function () { this.field('title') this.field('content', {boost: 10}) this.ref('id') }); {% assign count = 0 %}{% for page...",
  "menu": ""
}]
console.log(store[1].title);
console.log(store[1].summary);
// builds search

$(document).ready(function() {
  $('#search').on('keyup', function () {
    var resultdiv = $('#results');
    var res_count = 0;
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].menu == page_menu && store[ref].url != '/404.html') {
        var searchitem = '<article><h3><a href="'+store[ref].url+'">'+store[ref].title+'</a></h3><p>'+store[ref].summary+'</p></article>';
        resultdiv.append(searchitem);
        res_count = res_count + 1;
      }
    }
    if (res_count == 0) {
        var notfound = '<p>No results found</p>';
        resultdiv.append(notfound);
    }
  });
});
