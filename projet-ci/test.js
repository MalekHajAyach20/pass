const verifierPhrase = require('./verifierPhrase');  // Import de la fonction

// Test si le mot "bonjour" est dans la phrase
test('Le mot "bonjour" est dans la phrase', () => {
    expect(verifierPhrase("Bonjour tout le monde")).toBe("✅ Mot trouvé");
});

// Test si le mot "bonjour" n'est pas dans la phrase
test('Le mot "bonjour" n\'est pas dans la phrase', () => {
    expect(verifierPhrase("Salut tout le monde")).toBe("❌ Mot non trouvé");
});
