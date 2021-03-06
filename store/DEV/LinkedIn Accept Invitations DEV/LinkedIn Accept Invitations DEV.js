// Phantombuster configuration {
"phantombuster command: nodejs"
"phantombuster package: 5"
"phantombuster dependencies: lib-StoreUtilities.js, lib-LinkedIn.js"

const Buster = require("phantombuster")
const buster = new Buster()

const Nick = require("nickjs")
const nick = new Nick({
	loadImages: true,
	userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0",
	printPageErrors: false,
	printResourceErrors: false,
	printNavigation: false,
	printAborts: false,
})

const StoreUtilities = require("./lib-StoreUtilities")
const utils = new StoreUtilities(nick, buster)
const LinkedIn = require("./lib-LinkedIn")
const linkedIn = new LinkedIn(nick, buster, utils)

const MSG_MAX_LENGTH = 1000
const EMOJI_PATTERN = /\u{1F3F4}(?:\u{E0067}\u{E0062}(?:\u{E0065}\u{E006E}\u{E0067}|\u{E0077}\u{E006C}\u{E0073}|\u{E0073}\u{E0063}\u{E0074})\u{E007F}|\u200D\u2620\uFE0F)|\u{1F469}\u200D\u{1F469}\u200D(?:\u{1F466}\u200D\u{1F466}|\u{1F467}\u200D[\u{1F466}\u{1F467}])|\u{1F468}(?:\u200D(?:\u2764\uFE0F\u200D(?:\u{1F48B}\u200D)?\u{1F468}|[\u{1F468}\u{1F469}]\u200D(?:\u{1F466}\u200D\u{1F466}|\u{1F467}\u200D[\u{1F466}\u{1F467}])|\u{1F466}\u200D\u{1F466}|\u{1F467}\u200D[\u{1F466}\u{1F467}]|[\u{1F33E}\u{1F373}\u{1F393}\u{1F3A4}\u{1F3A8}\u{1F3EB}\u{1F3ED}\u{1F4BB}\u{1F4BC}\u{1F527}\u{1F52C}\u{1F680}\u{1F692}\u{1F9B0}-\u{1F9B3}])|[\u{1F3FB}-\u{1F3FF}]\u200D[\u{1F33E}\u{1F373}\u{1F393}\u{1F3A4}\u{1F3A8}\u{1F3EB}\u{1F3ED}\u{1F4BB}\u{1F4BC}\u{1F527}\u{1F52C}\u{1F680}\u{1F692}\u{1F9B0}-\u{1F9B3}])|\u{1F469}\u200D(?:\u2764\uFE0F\u200D(?:\u{1F48B}\u200D[\u{1F468}\u{1F469}]|[\u{1F468}\u{1F469}])|[\u{1F33E}\u{1F373}\u{1F393}\u{1F3A4}\u{1F3A8}\u{1F3EB}\u{1F3ED}\u{1F4BB}\u{1F4BC}\u{1F527}\u{1F52C}\u{1F680}\u{1F692}\u{1F9B0}-\u{1F9B3}])|\u{1F469}\u200D\u{1F466}\u200D\u{1F466}|(?:\u{1F441}\uFE0F\u200D\u{1F5E8}|\u{1F469}[\u{1F3FB}-\u{1F3FF}]\u200D[\u2695\u2696\u2708]|\u{1F468}(?:[\u{1F3FB}-\u{1F3FF}]\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:[\u26F9\u{1F3CB}\u{1F3CC}\u{1F575}]\uFE0F|[\u{1F46F}\u{1F93C}\u{1F9DE}\u{1F9DF}])\u200D[\u2640\u2642]|[\u26F9\u{1F3CB}\u{1F3CC}\u{1F575}][\u{1F3FB}-\u{1F3FF}]\u200D[\u2640\u2642]|[\u{1F3C3}\u{1F3C4}\u{1F3CA}\u{1F46E}\u{1F471}\u{1F473}\u{1F477}\u{1F481}\u{1F482}\u{1F486}\u{1F487}\u{1F645}-\u{1F647}\u{1F64B}\u{1F64D}\u{1F64E}\u{1F6A3}\u{1F6B4}-\u{1F6B6}\u{1F926}\u{1F937}-\u{1F939}\u{1F93D}\u{1F93E}\u{1F9B8}\u{1F9B9}\u{1F9D6}-\u{1F9DD}](?:[\u{1F3FB}-\u{1F3FF}]\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\u{1F469}\u200D[\u2695\u2696\u2708])\uFE0F|\u{1F469}\u200D\u{1F467}\u200D[\u{1F466}\u{1F467}]|\u{1F469}\u200D\u{1F469}\u200D[\u{1F466}\u{1F467}]|\u{1F468}(?:\u200D(?:[\u{1F468}\u{1F469}]\u200D[\u{1F466}\u{1F467}]|[\u{1F466}\u{1F467}])|[\u{1F3FB}-\u{1F3FF}])|\u{1F3F3}\uFE0F\u200D\u{1F308}|\u{1F469}\u200D\u{1F467}|\u{1F469}[\u{1F3FB}-\u{1F3FF}]\u200D[\u{1F33E}\u{1F373}\u{1F393}\u{1F3A4}\u{1F3A8}\u{1F3EB}\u{1F3ED}\u{1F4BB}\u{1F4BC}\u{1F527}\u{1F52C}\u{1F680}\u{1F692}\u{1F9B0}-\u{1F9B3}]|\u{1F469}\u200D\u{1F466}|\u{1F1F6}\u{1F1E6}|\u{1F1FD}\u{1F1F0}|\u{1F1F4}\u{1F1F2}|\u{1F469}[\u{1F3FB}-\u{1F3FF}]|\u{1F1ED}[\u{1F1F0}\u{1F1F2}\u{1F1F3}\u{1F1F7}\u{1F1F9}\u{1F1FA}]|\u{1F1EC}[\u{1F1E6}\u{1F1E7}\u{1F1E9}-\u{1F1EE}\u{1F1F1}-\u{1F1F3}\u{1F1F5}-\u{1F1FA}\u{1F1FC}\u{1F1FE}]|\u{1F1EA}[\u{1F1E6}\u{1F1E8}\u{1F1EA}\u{1F1EC}\u{1F1ED}\u{1F1F7}-\u{1F1FA}]|\u{1F1E8}[\u{1F1E6}\u{1F1E8}\u{1F1E9}\u{1F1EB}-\u{1F1EE}\u{1F1F0}-\u{1F1F5}\u{1F1F7}\u{1F1FA}-\u{1F1FF}]|\u{1F1F2}[\u{1F1E6}\u{1F1E8}-\u{1F1ED}\u{1F1F0}-\u{1F1FF}]|\u{1F1F3}[\u{1F1E6}\u{1F1E8}\u{1F1EA}-\u{1F1EC}\u{1F1EE}\u{1F1F1}\u{1F1F4}\u{1F1F5}\u{1F1F7}\u{1F1FA}\u{1F1FF}]|\u{1F1FC}[\u{1F1EB}\u{1F1F8}]|\u{1F1FA}[\u{1F1E6}\u{1F1EC}\u{1F1F2}\u{1F1F3}\u{1F1F8}\u{1F1FE}\u{1F1FF}]|\u{1F1F0}[\u{1F1EA}\u{1F1EC}-\u{1F1EE}\u{1F1F2}\u{1F1F3}\u{1F1F5}\u{1F1F7}\u{1F1FC}\u{1F1FE}\u{1F1FF}]|\u{1F1EF}[\u{1F1EA}\u{1F1F2}\u{1F1F4}\u{1F1F5}]|\u{1F1F8}[\u{1F1E6}-\u{1F1EA}\u{1F1EC}-\u{1F1F4}\u{1F1F7}-\u{1F1F9}\u{1F1FB}\u{1F1FD}-\u{1F1FF}]|\u{1F1EE}[\u{1F1E8}-\u{1F1EA}\u{1F1F1}-\u{1F1F4}\u{1F1F6}-\u{1F1F9}]|\u{1F1FF}[\u{1F1E6}\u{1F1F2}\u{1F1FC}]|\u{1F1EB}[\u{1F1EE}-\u{1F1F0}\u{1F1F2}\u{1F1F4}\u{1F1F7}]|\u{1F1F5}[\u{1F1E6}\u{1F1EA}-\u{1F1ED}\u{1F1F0}-\u{1F1F3}\u{1F1F7}-\u{1F1F9}\u{1F1FC}\u{1F1FE}]|\u{1F1E9}[\u{1F1EA}\u{1F1EC}\u{1F1EF}\u{1F1F0}\u{1F1F2}\u{1F1F4}\u{1F1FF}]|\u{1F1F9}[\u{1F1E6}\u{1F1E8}\u{1F1E9}\u{1F1EB}-\u{1F1ED}\u{1F1EF}-\u{1F1F4}\u{1F1F7}\u{1F1F9}\u{1F1FB}\u{1F1FC}\u{1F1FF}]|\u{1F1E7}[\u{1F1E6}\u{1F1E7}\u{1F1E9}-\u{1F1EF}\u{1F1F1}-\u{1F1F4}\u{1F1F6}-\u{1F1F9}\u{1F1FB}\u{1F1FC}\u{1F1FE}\u{1F1FF}]|[#*0-9]\uFE0F\u20E3|\u{1F1F1}[\u{1F1E6}-\u{1F1E8}\u{1F1EE}\u{1F1F0}\u{1F1F7}-\u{1F1FB}\u{1F1FE}]|\u{1F1E6}[\u{1F1E8}-\u{1F1EC}\u{1F1EE}\u{1F1F1}\u{1F1F2}\u{1F1F4}\u{1F1F6}-\u{1F1FA}\u{1F1FC}\u{1F1FD}\u{1F1FF}]|\u{1F1F7}[\u{1F1EA}\u{1F1F4}\u{1F1F8}\u{1F1FA}\u{1F1FC}]|\u{1F1FB}[\u{1F1E6}\u{1F1E8}\u{1F1EA}\u{1F1EC}\u{1F1EE}\u{1F1F3}\u{1F1FA}]|\u{1F1FE}[\u{1F1EA}\u{1F1F9}]|[\u{1F3C3}\u{1F3C4}\u{1F3CA}\u{1F46E}\u{1F471}\u{1F473}\u{1F477}\u{1F481}\u{1F482}\u{1F486}\u{1F487}\u{1F645}-\u{1F647}\u{1F64B}\u{1F64D}\u{1F64E}\u{1F6A3}\u{1F6B4}-\u{1F6B6}\u{1F926}\u{1F937}-\u{1F939}\u{1F93D}\u{1F93E}\u{1F9B8}\u{1F9B9}\u{1F9D6}-\u{1F9DD}][\u{1F3FB}-\u{1F3FF}]|[\u26F9\u{1F3CB}\u{1F3CC}\u{1F575}][\u{1F3FB}-\u{1F3FF}]|[\u261D\u270A-\u270D\u{1F385}\u{1F3C2}\u{1F3C7}\u{1F442}\u{1F443}\u{1F446}-\u{1F450}\u{1F466}\u{1F467}\u{1F470}\u{1F472}\u{1F474}-\u{1F476}\u{1F478}\u{1F47C}\u{1F483}\u{1F485}\u{1F4AA}\u{1F574}\u{1F57A}\u{1F590}\u{1F595}\u{1F596}\u{1F64C}\u{1F64F}\u{1F6C0}\u{1F6CC}\u{1F918}-\u{1F91C}\u{1F91E}\u{1F91F}\u{1F930}-\u{1F936}\u{1F9B5}\u{1F9B6}\u{1F9D1}-\u{1F9D5}][\u{1F3FB}-\u{1F3FF}]|[\u261D\u26F9\u270A-\u270D\u{1F385}\u{1F3C2}-\u{1F3C4}\u{1F3C7}\u{1F3CA}-\u{1F3CC}\u{1F442}\u{1F443}\u{1F446}-\u{1F450}\u{1F466}-\u{1F469}\u{1F46E}\u{1F470}-\u{1F478}\u{1F47C}\u{1F481}-\u{1F483}\u{1F485}-\u{1F487}\u{1F4AA}\u{1F574}\u{1F575}\u{1F57A}\u{1F590}\u{1F595}\u{1F596}\u{1F645}-\u{1F647}\u{1F64B}-\u{1F64F}\u{1F6A3}\u{1F6B4}-\u{1F6B6}\u{1F6C0}\u{1F6CC}\u{1F918}-\u{1F91C}\u{1F91E}\u{1F91F}\u{1F926}\u{1F930}-\u{1F939}\u{1F93D}\u{1F93E}\u{1F9B5}\u{1F9B6}\u{1F9B8}\u{1F9B9}\u{1F9D1}-\u{1F9DD}][\u{1F3FB}-\u{1F3FF}]?|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55\u{1F004}\u{1F0CF}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E6}-\u{1F1FF}\u{1F201}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F236}\u{1F238}-\u{1F23A}\u{1F250}\u{1F251}\u{1F300}-\u{1F320}\u{1F32D}-\u{1F335}\u{1F337}-\u{1F37C}\u{1F37E}-\u{1F393}\u{1F3A0}-\u{1F3CA}\u{1F3CF}-\u{1F3D3}\u{1F3E0}-\u{1F3F0}\u{1F3F4}\u{1F3F8}-\u{1F43E}\u{1F440}\u{1F442}-\u{1F4FC}\u{1F4FF}-\u{1F53D}\u{1F54B}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F57A}\u{1F595}\u{1F596}\u{1F5A4}\u{1F5FB}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CC}\u{1F6D0}-\u{1F6D2}\u{1F6EB}\u{1F6EC}\u{1F6F4}-\u{1F6F9}\u{1F910}-\u{1F93A}\u{1F93C}-\u{1F93E}\u{1F940}-\u{1F945}\u{1F947}-\u{1F970}\u{1F973}-\u{1F976}\u{1F97A}\u{1F97C}-\u{1F9A2}\u{1F9B0}-\u{1F9B9}\u{1F9C0}-\u{1F9C2}\u{1F9D0}-\u{1F9FF}]|[#*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F0CF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1E6}-\u{1F1FF}\u{1F201}\u{1F202}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F250}\u{1F251}\u{1F300}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}\u{1F596}\u{1F5A4}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6D2}\u{1F6E0}-\u{1F6E5}\u{1F6E9}\u{1F6EB}\u{1F6EC}\u{1F6F0}\u{1F6F3}-\u{1F6F9}\u{1F910}-\u{1F93A}\u{1F93C}-\u{1F93E}\u{1F940}-\u{1F945}\u{1F947}-\u{1F970}\u{1F973}-\u{1F976}\u{1F97A}\u{1F97C}-\u{1F9A2}\u{1F9B0}-\u{1F9B9}\u{1F9C0}-\u{1F9C2}\u{1F9D0}-\u{1F9FF}]\uFE0F?/gu
/* global jQuery  */

// }

/**
 *
 * @async
 * @description Accept all profiles visible on the page and returns an Array of added profiles.
 */
const acceptInvites = (tab, nbProfiles, hasNote, hasMutualConn) => {
	return tab.evaluate(function(arg, done) {
		jQuery.noConflict()
		let invites = jQuery("ul.mn-invitation-list > li")

		/**
		 * Will only get invitations which have 1 or more mutual connections
		 */
		if (arg.hasMutualConn) {
			invites = invites.filter(function filterMutual() {
				if (jQuery(this).find(".member-insights").length > 0) {
					return this
				}
			})
		}

		/**
		 * Will only get invitations with a message
		 */
		if (arg.hasNote) {
			invites = invites.filter(function filterNote() {
				if (jQuery(this).find(".invitation-card__custom-message-container").length > 0) {
					return this
				}
			})
		}

		invites = invites.map(function accept(i) {
			if (i < arg.nbProfiles) {
				const toRet = {}
				toRet.url = this.querySelector("a[data-control-name=\"profile\"]").href

				if (this.querySelector("span.invitation-card__name")) {
					toRet.fullName = this.querySelector("span.invitation-card__name").textContent.trim()
				} else if (this.querySelector("span.invitation-card__title")) {
					toRet.fullName = this.querySelector("span.invitation-card__title").textContent.trim()
				} else {
					toRet.fullName = null
				}
				toRet.firstName = toRet.fullName ? toRet.fullName.split(" ")[0] : null

				if (this.querySelector("span.invitation-card__occupation")) {
					toRet.job = this.querySelector("span.invitation-card__occupation").textContent.trim()
				} else if (this.querySelector("span.invitation-card__subtitle")) {
					toRet.job = this.querySelector("span.invitation-card__subtitle").textContent.trim()
				} else {
					toRet.job = null
				}
				if (this.querySelector("a[data-control-name=\"personalized_message\"]")) {
					toRet.messageLink = this.querySelector("a[data-control-name=\"personalized_message\"]").href
				}
				if (this.querySelector("button.message-anywhere-button.invitation-card__custom-message-btn")) {
					toRet.chatMessageIndex = i + 1
				}
				jQuery(this).find("input[type=\"checkbox\"]").click()
				return toRet
			}
		})
		done(null, jQuery.makeArray(invites)) // Success
	}, { nbProfiles, hasNote, hasMutualConn })
}

const loadProfilesUsingScrollDown = async (tab) => {
	utils.log("Scrolling down...", "loading")
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
	await tab.scrollToBottom()
	await tab.wait(1000)
}

/**
 * @async
 * @description Function used to send a customized message to a LinkedIn user
 * @param {String} url - URL to edit the message
 * @param {String} message - Message to forge (if needed)
 * @param {Object} invite - Profile infos scraped
 * @return {Promise<Boolean>} true if success, otherwise false
 */
const sendMessage = async (tab, url, message, invite) => {
	// Removing emojis for specific fields
	for (const field of [ "firstName", "fullName" ]) {
		// Check if the field exists
		if (invite[field]) {
			invite[field] = invite[field].replace(EMOJI_PATTERN, "").trim()
		}
	}

	const matches = message.match(/#[a-zA-Z0-9]+#/gm)
	const inMailMessageSelectors = [ "textarea.msg-form__textarea", "div[contenteditable=true]" ]
	let inMailSelectorFound
	if (Array.isArray(matches)) {
		for (const one of matches) {
			let field = one.replace(/#/g, "")
			if (invite[field]) {
				message = message.replace(one, invite[field])
			} else {
				message = message.replace(one, "")
				utils.log(`Tag ${one} can't be found in the given profile`,"warning")
			}
		}
	}
	await tab.open(url)
	inMailSelectorFound = await tab.waitUntilVisible(inMailMessageSelectors, 15000, "or")

	if (inMailSelectorFound === inMailMessageSelectors[0]) {
		await tab.evaluate((arg, cb) => {
			cb(null, document.querySelector(arg.inMailMessageSelector).value = arg.message)
			}, { message, inMailMessageSelector: inMailSelectorFound })
		await tab.sendKeys(inMailSelectorFound, " ", { reset: false, keepFocus: true })
	} else {
		message = message.replace(/\n/g, "\r\n")
		await tab.sendKeys(inMailSelectorFound, message, { reset: false, keepFocus: false })
	}

	await tab.wait(2500)
	await tab.click("button.msg-form__send-button[data-control-name=\"send\"]")
	await tab.wait(2500)
}

const waitWhileEnable = (arg, cb) => {
	const startIdle = Date.now()
	const idle = () => {
		const sel = document.querySelector(arg.sel)
		if ((!sel) || (sel.disabled === false)) {
			if ((Date.now() - startIdle) >= 30000) {
				return cb(`${arg.sel} is enable after 30s`)
			}
			setTimeout(idle, 200)
		} else {
			return cb()
		}
	}
	idle()
}

const sendChatMessage = async (tab, message, invite) => {
	const SELECTORS = {
		chatWidget: "aside#msg-overlay div.msg-overlay-conversation-bubble--is-active.msg-overlay-conversation-bubble--petite",
		closeChatButton: "button[data-control-name=\"overlay.close_conversation_window\"]",
		spinners: "li-icon > .artdeco-spinner",
		messageEditor: "div.msg-form__contenteditable",
		sendButton: "button.msg-form__send-button[type=submit]",
		sendError: "p.msg-s-event-listitem__error-message"
	}
	// Removing emojis for specific fields
	for (const field of [ "firstName", "fullName" ]) {
		// Check if the field exists
		if (invite[field]) {
			invite[field] = invite[field].replace(EMOJI_PATTERN, "").trim()
		}
	}

	const matches = message.match(/#[a-zA-Z0-9]+#/gm)
	if (Array.isArray(matches)) {
		for (const one of matches) {
			let field = one.replace(/#/g, "")
			if (invite[field]) {
				message = message.replace(one, invite[field])
			} else {
				message = message.replace(one, "")
				utils.log(`Tag ${one} can't be found in the given profile`,"warning")
			}
		}
	}
	try {
		await tab.click(`button.message-anywhere-button.invitation-card__custom-message-btn:nth-child(${invite.chatMessageIndex})`)
		await tab.waitUntilVisible(SELECTORS.chatWidget, 15000)
		await tab.waitUntilVisible(`${SELECTORS.chatWidget} ${SELECTORS.messageEditor}`, 15000)
		await tab.sendKeys(`${SELECTORS.chatWidget} ${SELECTORS.messageEditor}`, message.replace(/\n/g, "\r\n"))
		await tab.click(`${SELECTORS.chatWidget} ${SELECTORS.sendButton}`)
		await tab.evaluate(waitWhileEnable, { sel: `${SELECTORS.chatWidget} ${SELECTORS.sendButton}` })
		if (await tab.isVisible(`${SELECTORS.chatWidget} ${SELECTORS.sendError}`)) {
			utils.log("message is not sent", "warning")
		}
		await tab.click(`${SELECTORS.chatWidget} ${SELECTORS.closeChatButton}`)
	} catch (err) {
		utils.log(`Error while sending message: ${err.message || err}`, "warning")
	}
}

nick.newTab().then(async (tab) => {
	let { sessionCookie, numberOfProfilesToAdd, hasNoteSent, hasMutualConnections, message } = utils.validateArguments()

	if (message && message.length > MSG_MAX_LENGTH) {
		utils.log(`Message is longer than ${MSG_MAX_LENGTH}, the API will not send any message for this launch`, "error")
		nick.exit(1)
	}

	if (typeof hasNoteSent !== "boolean") {
		hasNoteSent = false
	}

	if (typeof hasMutualConnections !== "boolean") {
		hasMutualConnections = false
	}

	const selectors = [ ".js-invitation-card__invite-details-container", "section.mn-invitation-manager__no-invites" ]

	await linkedIn.login(tab, sessionCookie, "https://www.linkedin.com/mynetwork/invitation-manager/?filterCriteria=null")
	await tab.inject("../injectables/jquery-3.0.0.min.js")
	const selector = await tab.waitUntilVisible(selectors, 10000, "or")
	if (selector === selectors[1]) {
	 	utils.log("No invite to accept.", "done")
	 	nick.exit()
	 }
	await loadProfilesUsingScrollDown(tab)
	let invites = await acceptInvites(tab, numberOfProfilesToAdd, hasNoteSent, hasMutualConnections)
	if (invites.length > 0) {
		// Issue #196: hotfix send message only if the scraping function return a LinkedIn thread URL
		if (message) {
			const inMailTab = await nick.newTab()

			for (const invite of invites) {
				if (invite.messageLink) {
					await sendMessage(inMailTab, invite.messageLink, message, invite)
				} else if (invite.chatMessageIndex) {
					// handle chat conversation situation (new LinkedIn feature)
					await sendChatMessage(tab, message, invite)
				} else {
					utils.log(`No LinkedIn thread URL found for ${invite.url}, accepting invitation whitout sending a message`, "info")
				}
			}
			await inMailTab.close()
		}

		await tab.click("button[data-control-name=\"accept_all\"]")
		await tab.wait(2000)

		// Verbose
		utils.log(`A total of ${invites.length} profile${invites.length !== 1 ? "s have" : " has"} been added`, "done")
		for (const invite of invites)
			console.log(`\t${invite.url}`)
	} else {
		utils.log("No invites found with given criterias", "done")
	}
	await linkedIn.updateCookie()
})
.then(() => {
	utils.log("Job done!", "done")
	nick.exit(0)
})
.catch((err) => {
	utils.log(err, "error")
	nick.exit(1)
})
