import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedin from "./ShareButtonLinkedin";
import ShareButtonPrint from "./ShareButtonPrint";
import AbstractShareButton from "./AbstractShareButton";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler();

const twitter: AbstractShareButton = new ShareButtonTwitter(
  eventHandler,
  ".btn-twitter",
  "https://www.youtube.com/rodrigobranas"
);
twitter.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(
  eventHandler,
  ".btn-facebook",
  "https://www.youtube.com/rodrigobranas"
);
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedin(
  eventHandler,
  ".btn-linkedin",
  "https://www.youtube.com/rodrigobranas"
);
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(
  eventHandler,
  ".btn-print"
);
print.bind();
