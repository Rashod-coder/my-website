favorite_languages = {
    'jen': 'python',
    'sarah': 'c',
    'edward': 'ruby',
    'phil': 'python',
}

for k, v in favorite_languages.items():
    print(k + "'s favorite language is " + v)

for person, language in favorite_languages.items():
    print(person + "'s favorite language is " + language)
