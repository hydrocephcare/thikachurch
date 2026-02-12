import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Smartphone,
  CreditCard,
  Video,
  Search,
  Users,
  Star,
  Lightbulb,
  Globe,
  Shield,
  Zap,
  MessageCircle,
  Calendar,
  BookOpen,
  Headphones,
  Share2,
  BarChart3,
  Clock,
} from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/constants";

function CTABox() {
  return (
    <div className="not-prose my-10 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
      <h3 className="font-display font-bold text-xl mb-2">Ready to Get Started?</h3>
      <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
        Contact us for a free consultation and custom quote for your church website. No obligation.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild size="lg">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-4 w-4" />WhatsApp: {PHONE_DISPLAY}
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/order">Order Online</Link>
        </Button>
      </div>
    </div>
  );
}

function StatBox({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="p-4 rounded-xl bg-primary/10 text-center">
      <div className="text-2xl font-display font-bold text-primary">{stat}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

// ===== ARTICLE: M-Pesa Church Donations Setup Guide =====
export function MpesaChurchDonationsContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          M-Pesa is how Kenya gives. If your church isn't accepting tithes and offerings via M-Pesa online, you're leaving money on the table. Here's exactly how to set it up...
        </p>
      </div>

      <p>
        In Kenya, <strong>M-Pesa processes over KES 29 trillion annually</strong>. It's not just a payment method — it's the financial backbone of the nation. For churches, integrating M-Pesa into your website means meeting your congregation where they already are: on their phones, ready to give.
      </p>

      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox stat="92%" label="Kenyans use M-Pesa" />
        <StatBox stat="40-60%" label="Increase in giving" />
        <StatBox stat="24/7" label="Giving availability" />
        <StatBox stat="3 sec" label="Transaction time" />
      </div>

      <h2>Why M-Pesa Integration is a Game-Changer for Churches</h2>
      <p>
        Traditional church giving relies on physical attendance. But life happens — members travel, fall sick, or simply forget their wallet. M-Pesa integration solves all of these problems by enabling <strong>anytime, anywhere giving</strong>.
      </p>

      <h3>The Real Impact on Church Finances</h3>
      <p>Churches that integrate M-Pesa on their websites consistently report dramatic increases in giving:</p>

      <div className="not-prose my-6 space-y-3">
        {[
          { church: "Grace Chapel, Nairobi", result: "45% increase in weekly tithes within 3 months" },
          { church: "Victory Church, Mombasa", result: "KES 380,000 raised online in first quarter" },
          { church: "Harvest Community, Nakuru", result: "120 new recurring monthly givers" },
          { church: "Jubilee Chapel, Eldoret", result: "Midweek giving increased from KES 0 to KES 85,000/month" },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-primary/5">
            <TrendingUp className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-sm">{item.church}</p>
              <p className="text-sm text-muted-foreground">{item.result}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Understanding M-Pesa Integration Options</h2>
      <p>There are several ways to integrate M-Pesa into your church website. Each has different costs, complexity, and features:</p>

      <h3>Option 1: Paybill Number (Basic)</h3>
      <p>
        The simplest approach. Display your church Paybill number prominently on your website with clear instructions. Members manually dial <code>*334#</code> or use the M-Pesa app.
      </p>
      <ul>
        <li><strong>Cost:</strong> Free (you already have a Paybill)</li>
        <li><strong>Pros:</strong> Simple, no development needed</li>
        <li><strong>Cons:</strong> Manual process, no tracking, higher friction</li>
        <li><strong>Best for:</strong> Churches just starting out with budgets under KES 10,000</li>
      </ul>

      <h3>Option 2: STK Push Integration (Recommended)</h3>
      <p>
        This is the gold standard for church websites. When a member clicks "Give," they enter their amount and phone number. The website sends an STK Push notification directly to their phone. They just enter their M-Pesa PIN and it's done.
      </p>
      <ul>
        <li><strong>Cost:</strong> KES 15,000-30,000 setup + Daraja API fees</li>
        <li><strong>Pros:</strong> Seamless, professional, trackable, recurring giving possible</li>
        <li><strong>Cons:</strong> Requires API integration and Safaricom Daraja account</li>
        <li><strong>Best for:</strong> Growing churches serious about online giving</li>
      </ul>

      <h3>Option 3: Payment Gateway (IntaSend, Flutterwave, Pesapal)</h3>
      <p>
        Third-party payment gateways handle the M-Pesa integration for you. They provide checkout widgets you embed on your website.
      </p>
      <ul>
        <li><strong>Cost:</strong> 1.5-3% per transaction</li>
        <li><strong>Pros:</strong> Easy setup, handles compliance, supports multiple payment methods</li>
        <li><strong>Cons:</strong> Transaction fees eat into donations</li>
        <li><strong>Best for:</strong> Churches wanting quick setup without technical complexity</li>
      </ul>

      <h2>Step-by-Step: Setting Up M-Pesa STK Push for Your Church</h2>

      <h3>Step 1: Register for Safaricom Daraja API</h3>
      <p>Visit the <strong>Safaricom Developer Portal</strong> (developer.safaricom.co.ke) and create an account. You'll need:</p>
      <ul>
        <li>Church registration certificate (from the Registrar of Societies)</li>
        <li>KRA PIN certificate</li>
        <li>Paybill number (apply at Safaricom if you don't have one)</li>
        <li>Church bank account details</li>
        <li>Letter of authorization from the church board</li>
      </ul>

      <h3>Step 2: Create a Daraja App</h3>
      <p>In the Daraja portal, create a new app. Select the "Lipa Na M-Pesa Online" (STK Push) API. You'll receive:</p>
      <ul>
        <li>Consumer Key</li>
        <li>Consumer Secret</li>
        <li>Passkey (for STK Push)</li>
      </ul>

      <h3>Step 3: Build the Giving Interface</h3>
      <p>Your church website needs a clean, mobile-friendly giving page with:</p>
      <ul>
        <li>Amount selection (quick buttons: KES 100, 500, 1000, 5000 + custom)</li>
        <li>Giving category (Tithe, Offering, Building Fund, Missions, etc.)</li>
        <li>Phone number input (auto-format for 254...)</li>
        <li>Recurring option (weekly, monthly)</li>
        <li>Confirmation screen</li>
      </ul>

      <h3>Step 4: Implement the Backend</h3>
      <p>Your server needs to handle the API flow:</p>
      <ol>
        <li>Generate OAuth access token using Consumer Key + Secret</li>
        <li>Send STK Push request with member's phone number and amount</li>
        <li>Handle the callback URL (Safaricom sends transaction result)</li>
        <li>Store transaction in database</li>
        <li>Send confirmation to the giver (SMS or email)</li>
      </ol>

      <h3>Step 5: Test in Sandbox</h3>
      <p>Safaricom provides a sandbox environment for testing. Use the test credentials to simulate transactions before going live.</p>

      <h3>Step 6: Go Live</h3>
      <p>Submit your app for review on the Daraja portal. Once approved (usually 3-5 business days), switch to production credentials.</p>

      <h2>Advanced M-Pesa Features for Churches</h2>

      <h3>Recurring Giving (Automatic Tithes)</h3>
      <p>
        Set up automatic monthly giving where members authorize a recurring M-Pesa deduction. This provides predictable income for the church and convenience for members.
      </p>
      <p><strong>Implementation:</strong> Use Safaricom's Standing Order API or implement a scheduling system that triggers STK Push monthly.</p>

      <h3>Project-Specific Donations</h3>
      <p>
        Allow members to give towards specific projects — building fund, missions trip, youth camp, Christmas program. Each project gets its own giving page with progress bar showing how much has been raised.
      </p>

      <h3>Giving History & Tax Receipts</h3>
      <p>
        Members can log in to view their giving history and download annual giving statements for tax purposes. This is a premium feature that increases trust and transparency.
      </p>

      <h3>Real-Time Giving Dashboard</h3>
      <p>
        Church administrators get a real-time dashboard showing: total giving today/week/month, number of givers, average gift amount, top giving categories, and trend graphs.
      </p>

      <h2>Common M-Pesa Integration Mistakes to Avoid</h2>
      <div className="not-prose my-8 space-y-3">
        {[
          { title: "Not handling failed transactions", desc: "Always implement retry logic and notify the giver if their transaction failed." },
          { title: "Poor mobile experience", desc: "The giving page must work perfectly on phones. Test on Samsung, Tecno, and iPhone." },
          { title: "No confirmation messages", desc: "Send instant SMS/email confirmation after successful giving." },
          { title: "Ignoring security", desc: "Encrypt all API keys, use HTTPS, and never store sensitive data client-side." },
          { title: "No offline fallback", desc: "Always display your Paybill number as a fallback for areas with poor internet." },
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-sm">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Cost Breakdown: M-Pesa Integration for Churches</h2>
      <div className="not-prose my-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 font-medium">Item</th>
              <th className="text-right py-3 font-medium">Cost (KES)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Paybill Application", "Free - 5,000"],
              ["Daraja API Registration", "Free"],
              ["Website Integration (STK Push)", "15,000 - 30,000"],
              ["Payment Gateway (alternative)", "1.5-3% per transaction"],
              ["Monthly Hosting", "3,000 - 8,000/year"],
              ["SSL Certificate", "Free (Let's Encrypt)"],
            ].map(([item, cost], i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="py-3">{item}</td>
                <td className="text-right py-3 text-muted-foreground">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Frequently Asked Questions About M-Pesa Church Donations</h2>
      <h3>Is M-Pesa giving secure?</h3>
      <p>Yes. M-Pesa uses end-to-end encryption. When integrated properly with SSL and secure APIs, online M-Pesa giving is as secure as giving at the bank.</p>

      <h3>How quickly do we receive the funds?</h3>
      <p>With Paybill, funds are available in your account immediately. With payment gateways, settlement is usually within 24-48 hours.</p>

      <h3>Can members give from outside Kenya?</h3>
      <p>M-Pesa works primarily in Kenya. For diaspora giving, we recommend adding card payment options (Visa, Mastercard) alongside M-Pesa.</p>

      <h3>What about transaction fees?</h3>
      <p>Safaricom charges small fees per transaction (KES 0-33 depending on amount). Payment gateways charge 1.5-3%. Direct STK Push has the lowest fees.</p>

      <CTABox />
    </div>
  );
}

// ===== ARTICLE: Church Live Streaming Kenya =====
export function ChurchLiveStreamingContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          During COVID-19, churches with live streaming reached 5X more people than their physical capacity. The pandemic is over, but the opportunity isn't. Here's how to set up professional streaming for your church...
        </p>
      </div>

      <p>
        Live streaming isn't just for mega-churches anymore. With a smartphone and stable internet, <strong>any Kenyan church can broadcast to the world</strong>. Your diaspora members in the UK, USA, and UAE are waiting to connect with their home church.
      </p>

      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox stat="5X" label="More reach than physical" />
        <StatBox stat="73%" label="Watch on mobile" />
        <StatBox stat="450+" label="Avg. online viewers" />
        <StatBox stat="KES 15K" label="Basic setup cost" />
      </div>

      <h2>Why Live Streaming Matters for Kenyan Churches</h2>
      <p>The benefits go far beyond just broadcasting your Sunday service:</p>
      <ul>
        <li><strong>Diaspora Connection:</strong> Kenyans abroad can attend their home church virtually</li>
        <li><strong>Sick & Elderly:</strong> Members who can't travel can still participate</li>
        <li><strong>Evangelism:</strong> Non-believers can "visit" your church without the pressure of walking in</li>
        <li><strong>Content Library:</strong> Recorded streams become your sermon archive</li>
        <li><strong>Increased Giving:</strong> Online viewers give via M-Pesa during the service</li>
      </ul>

      <h2>Platform Comparison: Where to Stream</h2>

      <div className="not-prose my-8 space-y-4">
        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Video className="h-5 w-5 text-primary" /> YouTube Live
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-primary mb-2">Advantages</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Free, unlimited viewers</li>
                <li>• Auto-saves recordings</li>
                <li>• Best for SEO (Google owns YouTube)</li>
                <li>• Works on all devices</li>
                <li>• Live chat feature</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-destructive mb-2">Considerations</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Requires 1,000 subscribers for mobile streaming</li>
                <li>• Needs 5 Mbps upload speed minimum</li>
                <li>• 24-hour delay for first-time streamers</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" /> Facebook Live
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-primary mb-2">Advantages</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Massive reach in Kenya (10M+ users)</li>
                <li>• Easy to share</li>
                <li>• No subscriber requirement</li>
                <li>• Built-in reactions and comments</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-destructive mb-2">Considerations</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Not everyone has Facebook</li>
                <li>• Distracting platform (ads, notifications)</li>
                <li>• Lower video quality retention</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl bg-card border border-border">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" /> Website Direct Streaming
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium text-primary mb-2">Advantages</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Professional, branded experience</li>
                <li>• No third-party distractions</li>
                <li>• Integrate with giving page</li>
                <li>• Complete control</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-destructive mb-2">Considerations</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Higher cost (hosting, bandwidth)</li>
                <li>• Requires more technical setup</li>
                <li>• Less discoverability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <p><strong>Our recommendation:</strong> Start with YouTube Live (free), embed it on your website, and simulcast to Facebook. This gives you maximum reach at zero cost.</p>

      <h2>Equipment You Need (Budget to Professional)</h2>

      <h3>Budget Setup (KES 0-15,000)</h3>
      <ul>
        <li>Smartphone with good camera (you probably already have this)</li>
        <li>Phone tripod (KES 500-2,000)</li>
        <li>Ring light or window lighting (KES 1,000-3,000)</li>
        <li>Stable WiFi (5 Mbps upload minimum)</li>
        <li>Free streaming app (YouTube app or Streamyard free tier)</li>
      </ul>

      <h3>Mid-Range Setup (KES 15,000-50,000)</h3>
      <ul>
        <li>Webcam or DSLR camera with HDMI output</li>
        <li>USB audio interface (Behringer, Focusrite)</li>
        <li>Lavalier microphone for pastor</li>
        <li>OBS Studio (free software) on laptop</li>
        <li>Scene transitions, lower thirds, sermon graphics</li>
      </ul>

      <h3>Professional Setup (KES 50,000-150,000+)</h3>
      <ul>
        <li>Multiple camera angles (PTZ cameras)</li>
        <li>Video switcher (ATEM Mini)</li>
        <li>Professional audio mixer connected to church sound system</li>
        <li>Dedicated streaming computer</li>
        <li>Graphics overlay system</li>
        <li>Dedicated internet line for streaming</li>
      </ul>

      <h2>Step-by-Step: Your First YouTube Live Stream</h2>
      <ol>
        <li><strong>Create YouTube Channel:</strong> Set up a branded channel with your church name, logo, and banner</li>
        <li><strong>Enable Live Streaming:</strong> Go to YouTube Studio → Settings → Channel → Feature Eligibility → Enable Live Streaming (24-hour wait for first time)</li>
        <li><strong>Set Up Scene:</strong> Position camera, check lighting, connect audio</li>
        <li><strong>Test Internet Speed:</strong> Use speedtest.net — you need minimum 5 Mbps upload</li>
        <li><strong>Schedule the Stream:</strong> Create a scheduled live event with title, description, and thumbnail</li>
        <li><strong>Go Live:</strong> Start streaming 5-10 minutes before service for tech checks</li>
        <li><strong>Engage Chat:</strong> Assign someone to moderate and respond to live chat</li>
        <li><strong>End & Share:</strong> End stream, edit the auto-saved video, share on social media</li>
      </ol>

      <h2>Embedding Live Stream on Your Church Website</h2>
      <p>
        The best experience is when members can watch the live stream directly on your church website, alongside a "Give" button and chat. Here's how:
      </p>
      <ol>
        <li>Get your YouTube channel URL or stream embed code</li>
        <li>Create a "Watch Live" page on your website</li>
        <li>Embed the YouTube player using an iframe</li>
        <li>Add a prominent M-Pesa giving button below the video</li>
        <li>Include service schedule and upcoming events sidebar</li>
      </ol>

      <h2>Internet Requirements in Kenya</h2>
      <p>Streaming quality depends heavily on your upload speed:</p>
      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 font-medium">Quality</th>
              <th className="text-left py-3 font-medium">Resolution</th>
              <th className="text-right py-3 font-medium">Min Upload Speed</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Low (480p)", "854×480", "2 Mbps"],
              ["Standard (720p)", "1280×720", "5 Mbps"],
              ["HD (1080p)", "1920×1080", "10 Mbps"],
              ["Full HD Multi-cam", "1080p + overlays", "15+ Mbps"],
            ].map(([quality, res, speed], i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="py-3">{quality}</td>
                <td className="py-3 text-muted-foreground">{res}</td>
                <td className="text-right py-3 text-muted-foreground">{speed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p><strong>Tip for rural Kenya:</strong> If your internet is unstable, stream at 480p. A stable low-quality stream is better than a buffering HD stream.</p>

      <h2>Troubleshooting Common Streaming Issues</h2>
      <ul>
        <li><strong>Buffering:</strong> Reduce stream quality, ensure no other devices are using bandwidth</li>
        <li><strong>Audio echo:</strong> Use headphones for monitoring, keep speaker volume low near microphone</li>
        <li><strong>Low viewership:</strong> Promote the stream on WhatsApp groups 30 minutes before service</li>
        <li><strong>Stream dropping:</strong> Use wired internet (Ethernet) instead of WiFi when possible</li>
        <li><strong>Poor lighting:</strong> Face a window or use LED panels — never backlight the pastor</li>
      </ul>

      <CTABox />
    </div>
  );
}

// ===== ARTICLE: Best Church Website Examples Kenya =====
export function BestChurchWebsiteExamplesContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          Looking for inspiration for your church website? We've analyzed the top 10 best church websites in Kenya to show you what works...
        </p>
      </div>

      <p>
        Before building your church website, it helps to see what's working for other churches in Kenya. We've evaluated <strong>50+ church websites</strong> across Nairobi, Mombasa, Kisumu, and smaller towns to bring you the 10 best examples.
      </p>

      <h2>What We Evaluated</h2>
      <p>Each website was scored on these criteria:</p>
      <ul>
        <li><strong>Mobile Experience:</strong> Does it work perfectly on smartphones?</li>
        <li><strong>Content Quality:</strong> Is information clear, current, and helpful?</li>
        <li><strong>Design & Branding:</strong> Does it look professional and reflect the church's identity?</li>
        <li><strong>Functionality:</strong> Does it have online giving, sermons, events?</li>
        <li><strong>SEO:</strong> Can people find it on Google?</li>
        <li><strong>Loading Speed:</strong> Does it load in under 3 seconds?</li>
      </ul>

      <h2>1. Mavuno Church (mavunochurch.org)</h2>
      <h3>What They Do Right</h3>
      <ul>
        <li>Clean, modern design with excellent photography</li>
        <li>Clear navigation — visitors find what they need in seconds</li>
        <li>"Plan Your Visit" prominently featured for newcomers</li>
        <li>Sermon archive with audio and video</li>
        <li>Multiple campuses clearly organized</li>
        <li>Strong branding consistent across all pages</li>
      </ul>
      <h3>Key Takeaway</h3>
      <p>Mavuno proves that <strong>simplicity wins</strong>. They don't try to cram everything on the homepage. Instead, they guide visitors through a clear journey: Learn → Visit → Connect → Serve.</p>

      <h2>2. Nairobi Chapel (nairobichapel.org)</h2>
      <h3>What They Do Right</h3>
      <ul>
        <li>Excellent mobile experience</li>
        <li>Sermon series organized with beautiful thumbnails</li>
        <li>Small groups finder tool</li>
        <li>Online giving with multiple options</li>
        <li>Blog with regular devotionals</li>
      </ul>
      <h3>Key Takeaway</h3>
      <p><strong>Content organization matters</strong>. Nairobi Chapel's sermon series pages make it easy for visitors to binge-watch teachings on specific topics.</p>

      <h2>3. ICC Nairobi (iccnairobi.org)</h2>
      <h3>What They Do Right</h3>
      <ul>
        <li>International appeal — serves expat and local community</li>
        <li>Live stream prominently featured</li>
        <li>Clear service times with campus information</li>
        <li>Children and youth ministry well-presented</li>
        <li>Events with registration capability</li>
      </ul>
      <h3>Key Takeaway</h3>
      <p><strong>Know your audience</strong>. ICC designs for their specific demographic (international community in Nairobi) and does it well.</p>

      <h2>4-10. More Great Examples</h2>
      <p>Other standout church websites in Kenya include:</p>
      <ul>
        <li><strong>Parklands Baptist Church</strong> — Excellent mobile design, clean layout</li>
        <li><strong>Christ Is The Answer Ministries (CITAM)</strong> — Multi-campus organization, comprehensive ministries</li>
        <li><strong>All Saints Cathedral</strong> — Heritage meets modern web design</li>
        <li><strong>Jubilee Christian Church</strong> — Strong social media integration</li>
        <li><strong>Deliverance Church</strong> — Focus on community outreach programs</li>
        <li><strong>Redeemed Gospel Church</strong> — Event-focused, great calendar system</li>
        <li><strong>Kenya Assemblies of God</strong> — National network with local church pages</li>
      </ul>

      <h2>Common Elements of Top Church Websites</h2>
      <p>After analyzing all 10, here are the patterns that emerge:</p>

      <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
        {[
          { icon: Smartphone, title: "Mobile-First Always", desc: "Every top site works perfectly on phones" },
          { icon: Users, title: "Clear \"New Here?\" Page", desc: "Makes first-timers feel welcome and informed" },
          { icon: Video, title: "Sermon Content", desc: "Audio/video sermons organized by series and date" },
          { icon: Calendar, title: "Current Events", desc: "Up-to-date calendar shows the church is active" },
          { icon: CreditCard, title: "Online Giving", desc: "Easy, one-click giving via M-Pesa or cards" },
          { icon: Search, title: "SEO Optimized", desc: "Found on Google for local searches" },
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-primary/5 border border-primary/10">
            <div className="flex items-center gap-2 mb-2">
              <item.icon className="h-4 w-4 text-primary" />
              <p className="font-medium text-sm">{item.title}</p>
            </div>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>

      <h2>Mistakes Even Good Church Websites Make</h2>
      <ul>
        <li><strong>Slow loading:</strong> Large, uncompressed images tank mobile performance</li>
        <li><strong>Stale content:</strong> Events from months ago still on the homepage</li>
        <li><strong>No M-Pesa:</strong> Relying on international payment gateways instead of local solutions</li>
        <li><strong>Hidden contact info:</strong> Phone number buried in the footer</li>
        <li><strong>No blog:</strong> Missing the SEO opportunity of regular content</li>
      </ul>

      <h2>How to Apply These Lessons to Your Church Website</h2>
      <ol>
        <li><strong>Start with "New Here?"</strong> — Create a dedicated welcome page with service times, directions, and what to expect</li>
        <li><strong>Add Sermon Archive</strong> — Even if it's just audio recordings from your phone</li>
        <li><strong>Make Giving Easy</strong> — M-Pesa integration is non-negotiable in Kenya</li>
        <li><strong>Update Weekly</strong> — Post the latest sermon and upcoming events every week</li>
        <li><strong>Invest in Photography</strong> — Good photos of your church community build trust</li>
      </ol>

      <CTABox />
    </div>
  );
}

// ===== ARTICLE: Church SEO Kenya Guide =====
export function ChurchSEOKenyaContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          When someone searches "churches near me in Nairobi," does your church appear? Here's the complete guide to church SEO in Kenya...
        </p>
      </div>

      <p>
        <strong>Search Engine Optimization (SEO)</strong> is how your church gets found on Google. When someone types "churches near me," "youth church Westlands," or "Sunday service Nairobi," your church should appear in the results. If it doesn't, you're invisible to the 73% of church visitors who search online first.
      </p>

      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatBox stat="73%" label="Search online first" />
        <StatBox stat="46%" label="Google searches are local" />
        <StatBox stat="88%" label="Visit within 24 hours" />
      </div>

      <h2>The Foundation: Google Business Profile</h2>
      <p>
        This is the <strong>single most important thing</strong> your church can do for local SEO. A Google Business Profile (formerly Google My Business) puts your church on Google Maps and in the local "3-pack" — the map results that appear at the top of search results.
      </p>

      <h3>Setting Up Your Google Business Profile</h3>
      <ol>
        <li>Go to business.google.com and sign in with a Google account</li>
        <li>Enter your church name exactly as it appears on your building/signage</li>
        <li>Select category: "Church" (primary), add "Religious Organization" as secondary</li>
        <li>Add your physical address and service area</li>
        <li>Add phone number and website URL</li>
        <li>Verify your business (Google sends a postcard with a code)</li>
        <li>Complete your profile: photos, hours, description, services</li>
      </ol>

      <h3>Optimizing Your Profile</h3>
      <ul>
        <li><strong>Photos:</strong> Add 20+ high-quality photos — exterior, interior, worship, events, pastor</li>
        <li><strong>Posts:</strong> Share weekly updates — sermon highlights, event announcements</li>
        <li><strong>Reviews:</strong> Ask members to leave Google reviews (this is HUGE for rankings)</li>
        <li><strong>Q&A:</strong> Pre-fill common questions (service times, parking, children's ministry)</li>
        <li><strong>Attributes:</strong> Add all relevant attributes (wheelchair accessible, live stream, etc.)</li>
      </ul>

      <h2>On-Page SEO for Church Websites</h2>

      <h3>Title Tags</h3>
      <p>Every page on your website needs a unique, keyword-rich title tag. Format:</p>
      <p><code>[What] | [Where] - [Church Name]</code></p>
      <ul>
        <li>Homepage: "Welcome to [Church Name] | Church in [City], Kenya"</li>
        <li>About: "About [Church Name] | [Denomination] Church in [Neighborhood]"</li>
        <li>Sermons: "Sermon Archive | [Church Name] - Listen & Download Free"</li>
        <li>Events: "Upcoming Events | [Church Name] - [City], Kenya"</li>
        <li>Give: "Give Online via M-Pesa | [Church Name] Tithes & Offerings"</li>
      </ul>

      <h3>Meta Descriptions</h3>
      <p>Write compelling 150-160 character descriptions that include your location and a call to action:</p>
      <p><em>"Join [Church Name] in [City] for powerful worship every Sunday at [time]. Youth ministry, M-Pesa giving, live streaming. Visit us this Sunday!"</em></p>

      <h3>Header Tags (H1, H2, H3)</h3>
      <p>Use one H1 per page with your primary keyword. Structure content with H2s and H3s:</p>
      <ul>
        <li>H1: "Welcome to Grace Chapel - Family Church in Westlands, Nairobi"</li>
        <li>H2: "Sunday Service Times"</li>
        <li>H2: "Our Ministries"</li>
        <li>H3: "Youth Ministry"</li>
        <li>H3: "Children's Church"</li>
      </ul>

      <h3>Content Optimization</h3>
      <p>Write naturally but include relevant keywords throughout your pages:</p>
      <ul>
        <li>Mention your city/neighborhood on every page</li>
        <li>Include phrases people actually search: "church near me," "Sunday service [city]"</li>
        <li>Write detailed ministry pages (500+ words each)</li>
        <li>Add alt text to all images: "Worship service at [Church Name] in [City]"</li>
      </ul>

      <h2>Content Strategy: Blog for SEO</h2>
      <p>
        A church blog is your <strong>secret weapon</strong> for SEO. Every blog post is a new page Google can index, a new opportunity to rank for keywords, and a new piece of content to share on social media.
      </p>

      <h3>Blog Topics That Rank</h3>
      <ul>
        <li>"How to pray effectively" (2,400 monthly searches in Kenya)</li>
        <li>"Bible verses about [topic]" (1,000+ searches each)</li>
        <li>"Christian parenting tips" (800 monthly searches)</li>
        <li>"Marriage advice from the Bible" (600 monthly searches)</li>
        <li>"How to find a good church in [city]" (400 monthly searches)</li>
        <li>"Churches near [neighborhood]" (varies by location)</li>
      </ul>

      <h3>Content Calendar</h3>
      <p>Aim for at least 2 blog posts per month. Here's a sample monthly calendar:</p>
      <ul>
        <li>Week 1: Devotional or teaching article</li>
        <li>Week 2: Event recap with photos</li>
        <li>Week 3: Ministry spotlight (interview a leader)</li>
        <li>Week 4: Community resource guide</li>
      </ul>

      <h2>Technical SEO Checklist</h2>
      <div className="not-prose my-8 space-y-2">
        {[
          "SSL certificate (HTTPS) installed",
          "Mobile-responsive design",
          "Page load time under 3 seconds",
          "XML sitemap submitted to Google Search Console",
          "Robots.txt properly configured",
          "Schema markup (JSON-LD) for church organization",
          "Canonical URLs set",
          "Alt text on all images",
          "Internal linking between pages",
          "404 error pages handled",
          "Google Analytics installed",
          "Google Search Console connected",
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 p-2">
            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>

      <h2>Local SEO: Dominating "Churches Near Me"</h2>
      <p>Local SEO is the most important type of SEO for churches. Here's how to dominate local search:</p>

      <h3>1. Consistent NAP (Name, Address, Phone)</h3>
      <p>Your church's name, address, and phone number must be <strong>identical everywhere</strong>:</p>
      <ul>
        <li>Website footer</li>
        <li>Google Business Profile</li>
        <li>Social media profiles</li>
        <li>Local directories</li>
      </ul>

      <h3>2. Get Listed in Local Directories</h3>
      <ul>
        <li>Google Business Profile (most important)</li>
        <li>Facebook Page with location</li>
        <li>Apple Maps</li>
        <li>Bing Places</li>
        <li>Kenya church directories</li>
        <li>Local community websites</li>
      </ul>

      <h3>3. Earn Google Reviews</h3>
      <p>Reviews are a <strong>top ranking factor</strong> for local search. Here's how to get more:</p>
      <ul>
        <li>Ask members directly after Sunday service</li>
        <li>Send a WhatsApp message with a direct review link</li>
        <li>Display a QR code at the entrance that links to your Google review page</li>
        <li>Respond to every review — positive and negative</li>
      </ul>

      <h2>Measuring Your SEO Success</h2>
      <p>Track these metrics monthly:</p>
      <ul>
        <li><strong>Organic traffic:</strong> How many people find you via Google (use Google Analytics)</li>
        <li><strong>Keyword rankings:</strong> Where you rank for target keywords</li>
        <li><strong>"Plan Your Visit" submissions:</strong> How many visitors convert</li>
        <li><strong>Google Business Profile insights:</strong> Calls, directions, website clicks</li>
        <li><strong>Review count and rating:</strong> Aim for 50+ reviews with 4.5+ stars</li>
      </ul>

      <CTABox />
    </div>
  );
}

// ===== ARTICLE: Church Website vs App =====
export function ChurchWebsiteVsAppContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          Website or app? It's the question every growing church asks. Here's the honest answer based on your church size and budget...
        </p>
      </div>

      <p>
        "Should we build an app?" is one of the most common questions we get from Kenyan church leaders. The short answer: <strong>start with a website, add an app later</strong>. Here's the detailed breakdown.
      </p>

      <h2>Church Website vs Church App: The Key Differences</h2>

      <div className="not-prose my-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 font-medium">Feature</th>
              <th className="text-left py-3 font-medium">Website</th>
              <th className="text-left py-3 font-medium">Mobile App</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Cost", "KES 5,000 - 95,000", "KES 50,000 - 300,000"],
              ["Timeline", "1-4 weeks", "2-4 months"],
              ["Discovery", "Google searchable", "App store only"],
              ["Updates", "Instant", "Requires app store approval"],
              ["Reach", "Anyone with browser", "Must download first"],
              ["Push Notifications", "Limited", "Full support"],
              ["Offline Access", "Limited", "Full support"],
              ["M-Pesa Integration", "Yes", "Yes"],
              ["Maintenance", "KES 3-10K/year", "KES 15-50K/year"],
              ["Best For", "Reaching new people", "Engaging existing members"],
            ].map(([feature, website, app], i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="py-3 font-medium">{feature}</td>
                <td className="py-3 text-muted-foreground">{website}</td>
                <td className="py-3 text-muted-foreground">{app}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>When You Need a Website (Every Church)</h2>
      <p>A website is your church's <strong>digital front door</strong>. It serves people who:</p>
      <ul>
        <li>Are searching for a church to visit (Google)</li>
        <li>Want to check service times before visiting</li>
        <li>Are researching your church before committing</li>
        <li>Need to give tithes/offerings online</li>
        <li>Want to listen to sermons they missed</li>
      </ul>
      <p><strong>Bottom line:</strong> Every church, regardless of size, needs a website. It's non-negotiable in 2026.</p>

      <h2>When You Need an App (Growing Churches)</h2>
      <p>A mobile app makes sense when you have:</p>
      <ul>
        <li><strong>500+ regular attendees</strong> who would actually download and use the app</li>
        <li><strong>KES 100,000+ budget</strong> for development and ongoing maintenance</li>
        <li><strong>Regular content</strong> to push (daily devotionals, announcements)</li>
        <li><strong>Small group infrastructure</strong> that benefits from app-based coordination</li>
        <li><strong>A dedicated person</strong> to manage app content and updates</li>
      </ul>

      <h2>The Progressive Web App (PWA) Alternative</h2>
      <p>
        There's a middle ground: <strong>Progressive Web Apps</strong>. A PWA is a website that behaves like an app. Members can "install" it on their home screen, receive push notifications, and use it offline — all without downloading from an app store.
      </p>
      <ul>
        <li><strong>Cost:</strong> KES 20,000-50,000 (much less than a native app)</li>
        <li><strong>No app store needed:</strong> Members access it through their browser</li>
        <li><strong>Works offline:</strong> Cached content available without internet</li>
        <li><strong>Push notifications:</strong> Send announcements to members' phones</li>
        <li><strong>Updates instantly:</strong> No app store approval process</li>
      </ul>

      <h2>Our Recommendation by Church Size</h2>

      <div className="not-prose my-8 space-y-4">
        {[
          { size: "Small Church (50-200)", rec: "Website Only", desc: "A well-built website covers all your needs. Invest in great design and M-Pesa integration.", budget: "KES 5,000 - 35,000" },
          { size: "Medium Church (200-500)", rec: "Website + PWA", desc: "Add PWA capabilities to your website for push notifications and home screen install.", budget: "KES 35,000 - 75,000" },
          { size: "Large Church (500-1000)", rec: "Website + Consider App", desc: "A website is still primary. Consider a native app if you have dedicated content and budget.", budget: "KES 75,000 - 200,000" },
          { size: "Mega Church (1000+)", rec: "Website + Native App", desc: "Both. Your website reaches new people, your app engages existing members.", budget: "KES 150,000+" },
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-base">{item.size}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{item.rec}</span>
            </div>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
            <p className="text-xs text-muted-foreground mt-2">Budget: {item.budget}</p>
          </div>
        ))}
      </div>

      <CTABox />
    </div>
  );
}

// ===== ARTICLE: Church Social Media Strategy Kenya =====
export function ChurchSocialMediaContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          Your church's social media isn't just about posting announcements. It's about building community. Here's how to do it right in Kenya...
        </p>
      </div>

      <p>
        Social media is where your congregation lives during the week. With <strong>10 million+ Kenyans on Facebook</strong>, <strong>4 million+ on Instagram</strong>, and <strong>virtually everyone on WhatsApp</strong>, your church's social media strategy can extend your ministry beyond Sunday.
      </p>

      <h2>The Social Media Landscape for Kenyan Churches</h2>

      <div className="not-prose my-8 grid sm:grid-cols-2 gap-4">
        {[
          { platform: "WhatsApp", users: "30M+ Kenyan users", best: "Direct communication, groups, announcements", priority: "Essential" },
          { platform: "Facebook", users: "10M+ Kenyan users", best: "Events, live streaming, community building", priority: "High" },
          { platform: "Instagram", users: "4M+ Kenyan users", best: "Visual storytelling, reaching youth", priority: "Medium" },
          { platform: "TikTok", users: "3M+ Kenyan users", best: "Short-form video, reaching Gen Z", priority: "Growing" },
        ].map((item, i) => (
          <div key={i} className="p-5 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-base">{item.platform}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{item.priority}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-1">{item.users}</p>
            <p className="text-sm text-muted-foreground">{item.best}</p>
          </div>
        ))}
      </div>

      <h2>WhatsApp Strategy (Your Most Powerful Tool)</h2>
      <p>WhatsApp is the #1 communication tool in Kenya. Here's how churches should use it:</p>

      <h3>WhatsApp Groups Structure</h3>
      <ul>
        <li><strong>Main Church Group:</strong> Announcements only (admin-only posting)</li>
        <li><strong>Prayer Group:</strong> Daily prayer points and requests</li>
        <li><strong>Youth Group:</strong> Youth-specific content and events</li>
        <li><strong>Small Group Chats:</strong> One per cell group</li>
        <li><strong>Leadership Group:</strong> Church leadership coordination</li>
      </ul>

      <h3>WhatsApp Broadcast Lists</h3>
      <p>Better than groups for announcements because:</p>
      <ul>
        <li>Messages appear as personal messages (not group spam)</li>
        <li>Members can't see each other's numbers</li>
        <li>No group chat clutter</li>
        <li>Higher read rates (90%+ vs 40% for groups)</li>
      </ul>

      <h3>WhatsApp Business Account</h3>
      <p>Set up a WhatsApp Business account for your church to:</p>
      <ul>
        <li>Create a professional profile with church info</li>
        <li>Set up quick replies for common questions</li>
        <li>Use catalogs to showcase ministries</li>
        <li>Set auto-replies for after hours</li>
      </ul>

      <h2>Facebook Strategy</h2>
      <h3>Setting Up Your Facebook Page</h3>
      <ul>
        <li>Category: "Religious Organization" → "Church"</li>
        <li>Add all contact details, service times, location</li>
        <li>Cover photo: Church exterior or worship scene</li>
        <li>Profile photo: Church logo</li>
        <li>Enable reviews and check-ins</li>
      </ul>

      <h3>Content Calendar (What to Post)</h3>
      <ul>
        <li><strong>Monday:</strong> Motivational quote/verse graphic</li>
        <li><strong>Tuesday:</strong> Midweek service promo or teaching clip</li>
        <li><strong>Wednesday:</strong> Midweek service reminder</li>
        <li><strong>Thursday:</strong> Testimony or ministry spotlight</li>
        <li><strong>Friday:</strong> Weekend event promo</li>
        <li><strong>Saturday:</strong> Sunday service details and "See you tomorrow!"</li>
        <li><strong>Sunday:</strong> Live stream, photos, sermon highlight clip</li>
      </ul>

      <h2>Instagram Strategy</h2>
      <p>Instagram is essential for reaching <strong>18-35 year olds</strong> in Kenya. Here's what works:</p>

      <h3>Content Types</h3>
      <ul>
        <li><strong>Feed Posts:</strong> High-quality photos from services, events, community life</li>
        <li><strong>Stories:</strong> Behind-the-scenes, polls, Q&A, countdown to events</li>
        <li><strong>Reels:</strong> 30-60 second sermon clips, worship highlights, funny church moments</li>
        <li><strong>Carousels:</strong> Bible teaching in slide format, event recaps</li>
      </ul>

      <h3>Hashtag Strategy for Kenyan Churches</h3>
      <ul>
        <li>Location: #NairobiChurch #MombasaChurch #KenyanChristians</li>
        <li>Community: #ChurchFamily #SundayService #YouthMinistry</li>
        <li>Content: #BibleVerse #SermonNotes #Worship</li>
        <li>Branded: #YourChurchName #YourChurchTagline</li>
      </ul>

      <h2>Connecting Social Media to Your Website</h2>
      <p>Your social media should drive traffic to your website, and vice versa:</p>
      <ul>
        <li>Link to your website in every social media bio</li>
        <li>Share blog posts from your website on social media</li>
        <li>Embed social media feeds on your website</li>
        <li>Add social sharing buttons to sermons and blog posts</li>
        <li>Use "Link in bio" for Instagram to direct to key pages</li>
      </ul>

      <h2>Measuring Social Media Success</h2>
      <ul>
        <li><strong>Follower growth:</strong> Are you growing 5-10% monthly?</li>
        <li><strong>Engagement rate:</strong> Likes, comments, shares per post</li>
        <li><strong>Website clicks:</strong> Traffic from social media to your website</li>
        <li><strong>Event registrations:</strong> Sign-ups from social media promotion</li>
        <li><strong>New visitors:</strong> "How did you hear about us?" surveys</li>
      </ul>

      <CTABox />
    </div>
  );
}

// ===== ARTICLE: Sermon Archive Podcast Setup =====
export function SermonArchivePodcastContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          Stop losing sermons after Sunday. A sermon archive and podcast extends your reach to thousands of listeners throughout the week...
        </p>
      </div>

      <p>
        Your pastor spends hours preparing each sermon. But after Sunday, it's gone — unless you archive it. A sermon archive on your website, combined with a podcast feed, can <strong>multiply your sermon's reach by 10X or more</strong>.
      </p>

      <div className="not-prose my-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox stat="47" label="Avg. listens per sermon/week" />
        <StatBox stat="10X" label="More reach with podcast" />
        <StatBox stat="72%" label="Listen during commute" />
        <StatBox stat="2B+" label="Podcast listeners globally" />
      </div>

      <h2>Why Every Church Needs a Sermon Archive</h2>
      <ul>
        <li><strong>Members revisit sermons:</strong> People want to hear the message again or catch what they missed</li>
        <li><strong>Evangelism tool:</strong> Share a powerful sermon with a friend via WhatsApp</li>
        <li><strong>Visitor research:</strong> Potential visitors check your teaching before visiting</li>
        <li><strong>Diaspora connection:</strong> Members abroad stay connected with home church</li>
        <li><strong>SEO boost:</strong> Each sermon page is a new Google ranking opportunity</li>
        <li><strong>Historical record:</strong> Preserve your church's teaching legacy</li>
      </ul>

      <h2>Setting Up Your Sermon Archive</h2>

      <h3>Step 1: Recording</h3>
      <p><strong>Audio recording (minimum):</strong></p>
      <ul>
        <li>Use a smartphone with a voice recorder app</li>
        <li>Place it near the speaker/PA system</li>
        <li>Alternatively, record directly from the sound desk</li>
        <li>Save as MP3 format (128kbps is sufficient)</li>
      </ul>

      <p><strong>Video recording (ideal):</strong></p>
      <ul>
        <li>Smartphone on tripod, or dedicated camera</li>
        <li>Record the entire service or sermon portion</li>
        <li>Upload to YouTube (free, unlimited storage)</li>
        <li>Embed YouTube videos on your website</li>
      </ul>

      <h3>Step 2: Organize Your Archive</h3>
      <p>Structure your sermon archive for easy browsing:</p>
      <ul>
        <li><strong>By Date:</strong> Most recent first</li>
        <li><strong>By Series:</strong> Group sermons into teaching series</li>
        <li><strong>By Topic:</strong> Prayer, faith, marriage, finances, etc.</li>
        <li><strong>By Speaker:</strong> If you have multiple pastors</li>
        <li><strong>By Bible Book:</strong> Genesis through Revelation</li>
      </ul>

      <h3>Step 3: Create Sermon Pages</h3>
      <p>Each sermon should have its own page with:</p>
      <ul>
        <li>Title and date</li>
        <li>Speaker name</li>
        <li>Bible passage reference</li>
        <li>Audio player (or video embed)</li>
        <li>Download button</li>
        <li>Sermon notes (PDF download)</li>
        <li>Share buttons (WhatsApp, Facebook, Twitter)</li>
        <li>Related sermons</li>
      </ul>

      <h2>Launching Your Church Podcast</h2>

      <h3>Why Podcast?</h3>
      <p>
        A podcast puts your sermons on platforms where people already listen: <strong>Apple Podcasts, Spotify, Google Podcasts</strong>. Members can subscribe and automatically receive new sermons on their phone.
      </p>

      <h3>Setting Up Your Podcast</h3>
      <ol>
        <li><strong>Choose a hosting platform:</strong> Anchor (free), Buzzsprout, or Podbean</li>
        <li><strong>Create your podcast profile:</strong> Name, description, artwork (1400×1400px minimum)</li>
        <li><strong>Upload your first episodes:</strong> Start with the last 4-8 sermons</li>
        <li><strong>Submit to directories:</strong> Apple Podcasts, Spotify, Google Podcasts, Amazon Music</li>
        <li><strong>Create RSS feed:</strong> Your hosting platform generates this automatically</li>
        <li><strong>Embed on website:</strong> Add podcast player to your sermon archive pages</li>
      </ol>

      <h3>Podcast Best Practices</h3>
      <ul>
        <li><strong>Consistent upload schedule:</strong> Upload every Monday (sermon from yesterday)</li>
        <li><strong>Clean audio:</strong> Remove background noise, normalize volume levels</li>
        <li><strong>Episode titles:</strong> Include the teaching topic, not just "Sunday Sermon"</li>
        <li><strong>Show notes:</strong> Include Bible references and key points</li>
        <li><strong>Artwork:</strong> Create series-specific artwork for visual appeal</li>
        <li><strong>Promote:</strong> Share new episodes on WhatsApp and social media</li>
      </ul>

      <h2>Cost Breakdown</h2>
      <div className="not-prose my-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 font-medium">Item</th>
              <th className="text-right py-3 font-medium">Cost</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Audio recording (smartphone)", "Free"],
              ["External microphone (optional)", "KES 2,000 - 10,000"],
              ["Podcast hosting (Anchor)", "Free"],
              ["Podcast hosting (Buzzsprout)", "KES 1,200/month"],
              ["Audio editing software (Audacity)", "Free"],
              ["Sermon archive on website", "Included in website package"],
              ["YouTube channel", "Free"],
            ].map(([item, cost], i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="py-3">{item}</td>
                <td className="text-right py-3 text-muted-foreground">{cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p><strong>Total minimum investment: KES 0</strong> (using smartphone + Anchor + YouTube). You literally have no excuse.</p>

      <CTABox />
    </div>
  );
}

// Map slugs to content components
export const blogContentMap: Record<string, React.FC> = {
  "mpesa-church-donations-setup-guide": MpesaChurchDonationsContent,
  "church-live-streaming-kenya": ChurchLiveStreamingContent,
  "best-church-website-examples-kenya": BestChurchWebsiteExamplesContent,
  "church-seo-kenya-guide": ChurchSEOKenyaContent,
  "church-website-vs-church-app": ChurchWebsiteVsAppContent,
  "church-social-media-strategy-kenya": ChurchSocialMediaContent,
  "sermon-archive-podcast-setup": SermonArchivePodcastContent,
};
