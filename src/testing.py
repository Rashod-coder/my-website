plays = {
    'Macbeth': 'William Shakespeare',
    'A Streetcar Named Desire': 'Tennessee Williams',
    'Amadeus': 'Peter Shaffer'
}

for title, author in plays.items():  # Use the items() method to iterate over key-value pairs
    print(author, "wrote", title)
