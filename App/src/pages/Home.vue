<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
    <!-- Navigation -->
    <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100 shadow-sm">
  <div class="max-w-6xl mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <!-- Douae Bouhaja Logo -->
      <h1 
        onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" 
        class="text-2xl font-bold text-pink-800 animate-fade-in hover:text-pink-600 transition-colors cursor-pointer">
        Douae Bouhaja
      </h1>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-6">
        <a
          onclick="document.getElementById('about').scrollIntoView({ behavior: 'smooth' })"
          class="text-pink-700 hover:text-pink-900 hover:scale-105 transition-all duration-300 cursor-pointer"
        >À propos</a>

         <a
          onclick="document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })"
          class="text-pink-700 hover:text-pink-900 hover:scale-105 transition-all duration-300 cursor-pointer"
        >Portfolio</a>

        <a
          onclick="document.getElementById('education').scrollIntoView({ behavior: 'smooth' })"
          class="text-pink-700 hover:text-pink-900 hover:scale-105 transition-all duration-300 cursor-pointer"
        >Formation</a>

       

        <a
          onclick="document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })"
          class="text-pink-700 hover:text-pink-900 hover:scale-105 transition-all duration-300 cursor-pointer"
        >Compétences</a>

        <a
          onclick="document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })"
          class="text-pink-700 hover:text-pink-900 hover:scale-105 transition-all duration-300 cursor-pointer"
        >Contact</a>
      </div>
    </div>
  </div>
</nav>



    <!-- Hero Section -->
    <section class="pt-24 pb-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16 animate-slide-up">
          <div class="relative inline-block mb-8">
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-gray-800 mb-4 hover:text-pink-700 transition-colors duration-500">
            Douae <span class="text-pink-600 hover:text-pink-500 transition-colors">Bouhaja</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Développeuse Full-Stack passionnée | Créatrice d'expériences digitales | 20 ans
          </p>
          <div class="flex flex-wrap justify-center gap-4 text-gray-600 mb-8">
            <div class="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <MapPin class="w-5 h-5 text-pink-600" />
              <span>Gzenaya, Tanger, Maroc</span>
            </div>
            <div class="flex items-center gap-2 bg-white/80 px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <Calendar class="w-5 h-5 text-pink-600" />
              <span>18/06/2005</span>
            </div>
          </div>
          
          <!-- CV Download Button -->
          <div class="flex justify-center gap-4">
  <!-- Bouton Télécharger CV -->
  <button class="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:from-pink-600 hover:to-rose-600 transition-all duration-300 flex items-center gap-3">
    <Download class="w-5 h-5" />
    Télécharger CV
  </button>

  <!-- Bouton Me Contacter -->
  <a href="#contact" class="bg-white text-pink-600 border-2 border-pink-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 hover:bg-pink-50 transition-all duration-300 flex items-center gap-3">
    <MessageCircle class="w-5 h-5" />
    Me Contacter
  </a>
</div>

        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 px-4 bg-white/60">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in hover:text-pink-700 transition-colors">
      À propos de moi
    </h2>
    <div class="grid md:grid-cols-2 gap-12 items-center">
      
      <!-- Texte principal -->
      <div class="animate-slide-left">
        <p class="text-lg text-gray-700 leading-relaxed mb-6 hover:text-gray-800 transition-colors">
          Passionnée par le développement logiciel et le design d’interfaces, 
          je me spécialise dans la création d’expériences digitales innovantes et intuitives. 
          Mon approche allie créativité, expertise technique et sens du détail.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed mb-6 hover:text-gray-800 transition-colors">
          Actuellement en <span class="font-semibold text-pink-600">stage</span> au sein du département IT 
          chez <span class="font-semibold text-rose-600">Exelea</span>, je mets en pratique mes compétences 
          en développement et en conception d’interfaces dans un environnement professionnel exigeant.
        </p>

        <p class="text-lg text-gray-700 leading-relaxed mb-6 hover:text-gray-800 transition-colors">
          En parallèle, je poursuis le programme intensif <span class="font-semibold text-purple-600">ALX</span> 
          en partenariat avec <span class="font-semibold text-purple-600">Holberton School</span>, 
          ce qui me permet de renforcer continuellement mes connaissances en programmation 
          et en design d’expériences utilisateur.
        </p>

        <!-- Tags de compétences -->
        <div class="flex flex-wrap gap-3 mt-4">
          <span class="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-pink-200 hover:scale-105 transition-all duration-300 cursor-pointer">UI/UX Design</span>
          <span class="bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-rose-200 hover:scale-105 transition-all duration-300 cursor-pointer">Développement Mobile</span>
          <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 hover:scale-105 transition-all duration-300 cursor-pointer">Laravel & Vue.js</span>
          <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 hover:scale-105 transition-all duration-300 cursor-pointer">Apprentissage Autodidacte</span>
        </div>
      </div>

      <!-- Centres d'intérêt -->
      <div class="animate-slide-right">
        <div class="bg-gradient-to-br from-pink-100 to-rose-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500">
          <h3 class="text-2xl font-semibold text-gray-800 mb-6">Centres d'intérêt</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 cursor-pointer">
              <div class="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                <Palette class="w-5 h-5 text-pink-600" />
              </div>
              <span class="text-gray-700 font-medium">Design d’interfaces (UI/UX)</span>
            </div>
            <div class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 cursor-pointer">
              <div class="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center">
                <Smartphone class="w-5 h-5 text-rose-600" />
              </div>
              <span class="text-gray-700 font-medium">Développement mobile</span>
            </div>
            <div class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 cursor-pointer">
              <div class="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center">
                <BookOpen class="w-5 h-5 text-purple-600" />
              </div>
              <span class="text-gray-700 font-medium">Lecture et apprentissage continu</span>
            </div>
            <div class="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 cursor-pointer">
              <div class="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                <Heart class="w-5 h-5 text-pink-600" />
              </div>
              <span class="text-gray-700 font-medium">Animaux, en particulier les chats 🐾</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


    <!-- Portfolio Section -->
    <section id="portfolio" class="py-16 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in hover:text-pink-700 transition-colors">Portfolio</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <!-- Hotel Management Project -->
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
        <div class="h-48 bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center">
          <Building class="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">Système de Gestion d'Hôtel</h3>
          <p class="text-gray-600 mb-4 text-sm leading-relaxed">
            Application complète développée en JavaFX avec interface moderne, gestion des réservations et base de données MySQL.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">JavaFX</span>
            <span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-medium">CSS</span>
            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">MySQL</span>
          </div>
          <a href="https://github.com/douaebh?tab=repositories" target="_blank" class="block">
            <button class="w-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition-colors duration-300">
              Voir le projet
            </button>
          </a>
        </div>
      </div>

      <!-- Web Development Project -->
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
        <div class="h-48 bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
          <Monitor class="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">Applications Web Modernes</h3>
          <p class="text-gray-600 mb-4 text-sm leading-relaxed">
            Développement d'interfaces utilisateur responsives avec Vue.js et Tailwind CSS, optimisées pour tous les appareils.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">Vue.js</span>
            <span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-medium">Tailwind</span>
            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">JavaScript</span>
          </div>
          <a href="https://github.com/douaebh?tab=repositories" target="_blank" class="block">
            <button class="w-full bg-rose-500 text-white py-2 rounded-xl hover:bg-rose-600 transition-colors duration-300">
              Voir le projet
            </button>
          </a>
        </div>
      </div>

      <!-- Mobile Development Project -->
      <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
        <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
          <Smartphone class="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">Design UI/UX Mobile</h3>
          <p class="text-gray-600 mb-4 text-sm leading-relaxed">
            Création de designs d'interfaces mobiles intuitifs et esthétiques, centrés sur l'expérience utilisateur.
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">UI Design</span>
            <span class="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-medium">UX Research</span>
            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Prototyping</span>
          </div>
          <a href="https://github.com/douaebh?tab=repositories" target="_blank" class="block">
            <button class="w-full bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 transition-colors duration-300">
              Voir le projet
            </button>
          </a>
        </div>
      </div>

      <!-- AI-Lead Project -->
     <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
  <div class="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
    <Brain class="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
  </div>
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">AI-Lead Project</h3>
    <p class="text-gray-600 mb-4 text-sm leading-relaxed">
      Projet d'intelligence artificielle avancé intégrant Laravel, Vue.js, Tailwind et Inertia pour une expérience web moderne.
    </p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-medium">Laravel</span>
      <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Vue.js</span>
      <span class="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-medium">Tailwind</span>
      <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">Python</span>
      
    </div>
    <a href="https://github.com/douaebh?tab=repositories" target="_blank" class="block">
      <button class="w-full bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 transition-colors duration-300">
        Voir le projet
      </button>
    </a>
  </div>
</div>



    </div>
  </div>
</section>


    <!-- Education Section -->
    <section id="education" class="py-16 px-4 bg-white/60">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in hover:text-pink-700 transition-colors">Formation</h2>
        <div class="space-y-8">
          <div class="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-pink-500 animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-800 hover:text-pink-600 transition-colors">Programme intensif de développement logiciel - ALX</h3>
              <span class="text-pink-600 font-medium bg-pink-100 px-4 py-2 rounded-full">2024 - 2025</span>
            </div>
            <p class="text-gray-600 mb-2">En ligne (partenariat avec Holberton School)</p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <GraduationCap class="w-4 h-4" />
              <span>Formation intensive en développement logiciel</span>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-rose-500 animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-800 hover:text-pink-600 transition-colors">Diplôme Technicien Spécialisé en Développement Informatique</h3>
              <span class="text-rose-600 font-medium bg-rose-100 px-4 py-2 rounded-full">2023 - 2025</span>
            </div>
            <p class="text-gray-600 mb-2">Miage - Tanger</p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <GraduationCap class="w-4 h-4" />
              <span>Formation technique spécialisée</span>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-purple-500 animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 class="text-xl font-semibold text-gray-800 hover:text-pink-600 transition-colors">Baccalauréat Lettres Modernes</h3>
              <span class="text-purple-600 font-medium bg-purple-100 px-4 py-2 rounded-full">2022 - 2023</span>
            </div>
            <p class="text-gray-600 mb-2">Lycée Ibn Khatib, Tanger</p>
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <GraduationCap class="w-4 h-4" />
              <span>Diplôme d'études secondaires</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-12 animate-fade-in hover:text-pink-700 transition-colors">Compétences</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Technical Skills -->
          <div class="bg-white rounded-3xl shadow-lg p-8 animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Code class="w-6 h-6 text-pink-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Backend</h3>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span class="text-gray-700">Java</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span class="text-gray-700">Python</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span class="text-gray-700">PHP</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-pink-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span class="text-gray-700">Laravel</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg p-8 animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
                <Monitor class="w-6 h-6 text-rose-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Frontend</h3>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-rose-500 rounded-full"></div>
                <span class="text-gray-700">HTML</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-rose-500 rounded-full"></div>
                <span class="text-gray-700">CSS</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-rose-500 rounded-full"></div>
                <span class="text-gray-700">JavaScript</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-rose-500 rounded-full"></div>
                <span class="text-gray-700">Vue.js</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-rose-500 rounded-full"></div>
                <span class="text-gray-700">Tailwind CSS</span>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl shadow-lg p-8 animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Database class="w-6 h-6 text-purple-600" />
              </div>
              <h3 class="text-xl font-semibold text-gray-800">Bases de données</h3>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700">SQL</span>
              </div>
              <div class="flex items-center gap-3 p-2 rounded-lg hover:bg-purple-50 transition-colors cursor-pointer">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span class="text-gray-700">MySQL</span>
              </div>
            </div>
            <div class="mt-6">
              <h4 class="font-medium text-gray-800 mb-3">Outils bureautiques</h4>
              <div class="flex flex-wrap gap-2">
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">Word</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">Excel</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">PowerPoint</span>
                <span class="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer">Access</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages -->
        <div class="mt-16">
          <h3 class="text-3xl font-semibold text-center text-gray-800 mb-8 hover:text-pink-700 transition-colors">Langues</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-white rounded-2xl shadow-lg p-6 text-center animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div class="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-pink-200 transition-colors">
                <Globe class="w-8 h-8 text-pink-600" />
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">Arabe</h4>
              <p class="text-gray-600">Langue maternelle</p>
            </div>
            <div class="bg-white rounded-2xl shadow-lg p-6 text-center animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div class="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-rose-200 transition-colors">
                <Globe class="w-8 h-8 text-rose-600" />
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">Français</h4>
              <p class="text-gray-600">Niveau intermédiaire</p>
            </div>
            <div class="bg-white rounded-2xl shadow-lg p-6 text-center animate-slide-up hover:shadow-2xl hover:scale-105 transition-all duration-500">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-purple-200 transition-colors">
                <Globe class="w-8 h-8 text-purple-600" />
              </div>
              <h4 class="font-semibold text-gray-800 mb-2">Anglais</h4>
              <p class="text-gray-600">Niveau B2</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 px-4 bg-gradient-to-br from-pink-100 to-rose-100">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8 animate-fade-in hover:text-pink-700 transition-colors">Restons en contact</h2>
    <p class="text-center text-gray-600 mb-12 text-lg">
      N'hésitez pas à me contacter pour discuter d'opportunités de collaboration ou de projets !
    </p>
    
    <div class="grid md:grid-cols-2 gap-8 mb-12">
  <!-- Téléphone -->
  <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 animate-slide-left hover:shadow-2xl hover:scale-105 transition-all duration-500">
    <div class="flex items-center justify-center gap-3 mb-4">
      <div class="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
        <Phone class="w-6 h-6 text-pink-600" />
      </div>
      <h3 class="text-xl font-semibold text-gray-800">Téléphone</h3>
    </div>
    <p class="text-gray-700 text-lg text-center">
      07.81.55.81.92
    </p>
  </div>

  <!-- Email -->
  <div class="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 animate-slide-right hover:shadow-2xl hover:scale-105 transition-all duration-500">
    <div class="flex items-center justify-center gap-3 mb-4">
      <div class="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center">
        <Mail class="w-6 h-6 text-rose-600" />
      </div>
      <h3 class="text-xl font-semibold text-gray-800">Email</h3>
    </div>
    <p class="text-gray-700 text-lg text-center">
      Douaaebh18@gmail.com
    </p>
  </div>
</div>


    <!-- Social Media Links -->
    <div class="text-center">
      <h3 class="text-2xl font-semibold text-gray-800 mb-8">Suivez-moi</h3>
      <div class="flex justify-center gap-6">
        <a href="https://github.com/douaebh" target="_blank" rel="noopener noreferrer" class="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 hover:bg-pink-50 transition-all duration-300 group">
          <Github class="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" />
        </a>
        <a href="https://www.linkedin.com/in/douaa-bouhaja-333912336/" target="_blank" rel="noopener noreferrer" class="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 hover:bg-pink-50 transition-all duration-300 group">
          <Linkedin class="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" />
        </a>
        <a href="https://www.instagram.com/duuuv4aaae/" target="_blank" rel="noopener noreferrer" class="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 hover:bg-pink-50 transition-all duration-300 group">
          <Instagram class="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" />
        </a>
        <a href="#" class="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-2xl hover:scale-110 hover:bg-pink-50 transition-all duration-300 group">
          <Twitter class="w-6 h-6 text-gray-700 group-hover:text-pink-600 transition-colors" />
        </a>
      </div>
    </div>
  </div>
</section>


    <!-- Footer -->
   <footer class="bg-gray-900 text-white py-12 px-4">
  <div class="max-w-6xl mx-auto text-center">
    <!-- اسم وشعار -->
    <div class="mb-6">
      <h3 class="text-3xl font-extrabold text-pink-400 mb-2 tracking-wide">Douae Bouhaja</h3>
      <p class="text-gray-300 text-lg">Développeuse Full-Stack & Designer UI/UX</p>
    </div>

    <!-- حقوق النشر -->
    <div class="border-t border-gray-700 pt-6">
      <p class="text-gray-400 text-sm">© 2025 Douae Bouhaja. Tous droits réservés.</p>
      <div class="mt-4 flex justify-center gap-4 text-xl">
        <span class="animate-bounce-gentle">🐾</span>
        <span class="animate-pulse">💻</span>
        <span class="animate-bounce-gentle">🎨</span>
        <span class="animate-wave">💖</span>
      </div>
    </div>
  </div>
</footer>


  </div>
</template>

<script setup>
import { 
  MapPin, 
  Calendar, 
  Download,
  MessageCircle,
  Palette, 
  Smartphone, 
  BookOpen, 
  Heart, 
  GraduationCap, 
  Code, 
  Monitor, 
  Database, 
  Globe, 
  Building, 
  Phone, 
  Mail,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Brain   
} from 'lucide-vue-next'


</script>


<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes slideLeft {
  from { 
    opacity: 0; 
    transform: translateX(-30px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
}

@keyframes slideRight {
  from { 
    opacity: 0; 
    transform: translateX(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
}

@keyframes bounceGentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-20deg); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}

.animate-slide-left {
  animation: slideLeft 0.8s ease-out;
}

.animate-slide-right {
  animation: slideRight 0.8s ease-out;
}

.animate-bounce-gentle {
  animation: bounceGentle 2s ease-in-out infinite;
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Enhanced hover effects */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}

.hover\:scale-110:hover {
  transform: scale(1.1);
}

/* Transition improvements */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Custom gradient backgrounds */
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

html {
  scroll-behavior: smooth;
}

</style>