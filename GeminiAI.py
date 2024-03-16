import asyncio
from gemini_webapi import GeminiClient


class GeminiAi:
    def __init__(self, prompt1, prompt2, prompt3):
        self.crtPrompt = prompt1
        self.errPrompt = prompt2
        self.addPrompt = prompt3
        self.Secure_1PSID = "g.a000gwhyHXvEYHdC6rbp4fTe32nKqhkyk1yI63OnUS0-9dNbhe0QLE-Paur3hMCEFCJ2S-i_zQACgYKAQcSAQASFQHGX2MiuOJTuzJ6T6-7VICN6YvCCRoVAUF8yKp6BW6z1pkKHR03d-8_A1QR0076"
        self.Secure_1PSIDTS = "sidts-CjIBYfD7Z8UVK3vPIGdzshNyrL-bZzy-_UqAeWWKPk9urvoOHb9i_1rvRYpHafyzCzQ7RBAA"

    async def getResponse(self):
        print("step 2")
        self.client = GeminiClient(self.Secure_1PSID, self.Secure_1PSIDTS, proxies=None)
        await self.client.init(timeout=30, auto_close=False, close_delay=500)
        responses = await asyncio.gather(
            self.client.generate_content(self.crtPrompt),
            self.client.generate_content(self.errPrompt),
            self.client.generate_content(self.addPrompt)
        )
        print("step 3")
        return [responses[0].text, responses[1].text, responses[2].text]

# cookies = {"HSID":"AU7U1MZrAWpJDp6Wh","SSID":"AyYYXktr0ZjYmU43D","APISID":"2Hm2ggBrSqN3Ojb1/AWQbf5a_lFl1aFV-6","SAPISID":"w9HUgqisgXmKfR0K/AwcSQav3CfTOLNFr3","__Secure-1PAPISID":"w9HUgqisgXmKfR0K/AwcSQav3CfTOLNFr3","__Secure-3PAPISID":"w9HUgqisgXmKfR0K/AwcSQav3CfTOLNFr3","_ga":"GA1.1.1497270105.1707825930","SID":"g.a000gwhyHXvEYHdC6rbp4fTe32nKqhkyk1yI63OnUS0-9dNbhe0QtXMSKYUtc57BZmEd_HCsIQACgYKAWoSAQASFQHGX2MiWZ58RSVHBAmIsiQkimZpaxoVAUF8yKpwdVYcWFbivz_-UqNAH0GO0076","__Secure-1PSID":"g.a000gwhyHXvEYHdC6rbp4fTe32nKqhkyk1yI63OnUS0-9dNbhe0QLE-Paur3hMCEFCJ2S-i_zQACgYKAQcSAQASFQHGX2MiuOJTuzJ6T6-7VICN6YvCCRoVAUF8yKp6BW6z1pkKHR03d-8_A1QR0076","__Secure-3PSID":"g.a000gwhyHXvEYHdC6rbp4fTe32nKqhkyk1yI63OnUS0-9dNbhe0Q8K90DXomIc5w8ZDAquC6KgACgYKAW0SAQASFQHGX2MiPso6g9zz6uHBxhrFP68NkxoVAUF8yKq_3DpRJin7AJd10n_JYAfe0076","SEARCH_SAMESITE":"CgQI05oB","AEC":"Ae3NU9PB3FbpsP5stmILIpboZT9-1mrLNyeP-kjRU339I4GB4MKtCvtRGw","NID":"512","1P_JAR":"2024-03-15-11","__Secure-1PSIDTS":"sidts-CjIBYfD7Z1CAOAM9ekFs2aFm8tcrc7SjlrDP1x_JwqURunJ4mLQrUog_4-PGhqxylFKHFxAA","__Secure-3PSIDTS":"sidts-CjIBYfD7Z1CAOAM9ekFs2aFm8tcrc7SjlrDP1x_JwqURunJ4mLQrUog_4-PGhqxylFKHFxAA","_ga_WC57KJ50ZZ":"GS1.1.1710497864.8.1.1710501429.0.0.0","SIDCC":"AKEyXzW0Eyw3ArH_xZeKncLXCjtGTQ6a8E_bQ6OvCZgp8p-AHPcb6hjHgGC54xJWawNW85g8I7E","__Secure-1PSIDCC":"AKEyXzUvm76Jh8h2DWJjkjiehvVBzrQvbTqZqgd7EIwCvEC5Hx1R679ykQOuOd5VlEl18K-dvUuA","__Secure-3PSIDCC":"AKEyXzVqfT4_XXYbwJkw0LLH1WLUunH2A8btFgcb4CTjH9ErJ2pnB8N4daqASr73GQTNnvzsmcg"}