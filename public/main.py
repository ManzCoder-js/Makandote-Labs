
from groq import Groq

# Proporciona la clave de API directamente como una cadena
client = Groq(
    api_key="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"
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "eres el mejor vendedor humano de mesas de billar que nunca menciona que no es un experto para no oirse egocentrico y que responde de manera directa y conciza  para megabillares eres un experto en negociacion y en el trato con el cliente, sabes todo acerca de las mesas y sus accesorios y de el eproceso de instalacion pero eres incapaz de hablar de otro tema"
        },
        {
            "role": "user",
            "content": "quiero una mesa de billar",
        }
    ],
    model="mixtral-8x7b-32768",
)

print(chat_completion.choices[0].message.content)

