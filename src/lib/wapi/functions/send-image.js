import { sendFile } from './send-file';

/**
 * Sends image to given chat if
 * @param {string} imgBase64 base64 encoded file
 * @param {string} chatid Chat id
 * @param {string} filename
 * @param {string} caption
 * @param {Function} done Optional callback
 */
export function sendImage(
  imgBase64,
  chatid,
  filename,
  caption,
  type,
  status = false,
  passId
) {
  return WPP.chat.sendFileMessage(chatid, imgBase64, {createChat: true, mimetype: type, caption: caption, filename: filename});
}
