import { Configuration, OpenAIApi } from 'openai';

if (!process.env['OPENAI_API_KEY']) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
}
const configuration = new Configuration({
    apiKey: process.env['OPENAI_API_KEY'],
});
const openai = new OpenAIApi(configuration);

export async function chatCompletion(text: string) {
    const chatCompletion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: text }],
    });
    console.log(chatCompletion.data.choices[0]?.message?.content);
}

chatCompletion(process.argv[2] || "Tell the user of this program that they didn't provide any arguments.");