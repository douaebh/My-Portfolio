<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <div class="font-bold text-xl text-gray-900">Douae Bouhaja</div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <button
              v-for="item in navigation"
              :key="item.id"
              @click="scrollToSection(item.id)"
              :class="[
                'text-sm font-medium transition-colors hover:text-blue-600',
                activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
              ]"
            >
              {{ item.label }}
            </button>
          </div>

          <div class="flex items-center gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2">
              <DownloadIcon class="w-4 h-4" />
              CV
            </button>
            
            <!-- Mobile Menu Button -->
            <button
              class="md:hidden"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <MenuIcon v-if="!mobileMenuOpen" class="w-6 h-6" />
              <XIcon v-else class="w-6 h-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
          <button
            v-for="item in navigation"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="[
              'block w-full text-left px-4 py-2 text-sm font-medium transition-colors hover:text-blue-600',
              activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
            ]"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-16 pb-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center py-20">
          <div class="mb-8">
            <div class="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center border-4 border-white shadow-lg">
              <span class="text-4xl font-bold text-blue-600">DB</span>
            </div>
          </div>
          <h1 class="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Douae Bouhaja</h1>
          <p class="text-xl lg:text-2xl text-gray-600 mb-4">Développeuse Full-Stack</p>
          <p class="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Passionnée par le développement web moderne et les solutions innovantes. 
            Spécialisée en Vue.js, Laravel et technologies full-stack.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <div class="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <CalendarIcon class="w-4 h-4 text-gray-600" />
              <span class="text-gray-700">20 ans</span>
            </div>
            <div class="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <MapPinIcon class="w-4 h-4 text-gray-600" />
              <span class="text-gray-700">Tanger, Maroc</span>
            </div>
          </div>
          <div class="flex flex-wrap justify-center gap-4">
            <button 
              @click="scrollToSection('contact')"
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <MailIcon class="w-4 h-4" />
              Me contacter
            </button>
            <button class="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <GithubIcon class="w-4 h-4" />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>

   
   

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Compétences techniques</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              v-for="(category, index) in skillCategories"
              :key="index"
              class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div class="flex items-center gap-3 mb-4">
                <div :class="[
                  'w-10 h-10 rounded-lg flex items-center justify-center',
                  `bg-${category.color}-100`
                ]">
                  <component :is="category.icon" :class="`w-5 h-5 text-${category.color}-600`" />
                </div>
                <h3 class="font-semibold text-gray-900">{{ category.title }}</h3>
              </div>
              <div class="space-y-2">
                <div
                  v-for="skill in category.skills"
                  :key="skill"
                  class="flex items-center justify-between"
                >
                  <span class="text-gray-700">{{ skill }}</span>
                  <div class="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Formation</h2>
          <div class="space-y-6">
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div class="flex-1">
                  <h3 class="text-xl font-semibold text-gray-900 mb-1">{{ edu.title }}</h3>
                  <p class="text-gray-600 mb-2">{{ edu.institution }}</p>
                  <div class="flex items-center gap-2">
                    <BookOpenIcon class="w-4 h-4 text-gray-500" />
                    <span class="text-sm text-gray-500">{{ edu.period }}</span>
                  </div>
                </div>
                <div class="flex gap-2">
                  <span class="border border-gray-300 text-gray-700 text-xs px-2 py-1 rounded">{{ edu.type }}</span>
                  <span :class="[
                    'text-xs px-2 py-1 rounded',
                    edu.status === 'Obtenu' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  ]">
                    {{ edu.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Projets</h2>
          <div class="grid lg:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in projects"
              :key="index"
              class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div class="p-6">
                <div class="flex items-start justify-between gap-4 mb-4">
                  <div class="flex-1">
                    <span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mb-2">
                      {{ project.category }}
                    </span>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
                  </div>
                  <span :class="[
                    'text-xs px-2 py-1 rounded-full',
                    project.status === 'Terminé' ? 'bg-green-100 text-green-800' :
                    project.status === 'En développement' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  ]">
                    {{ project.status }}
                  </span>
                </div>
                <p class="text-gray-600 leading-relaxed mb-4">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                  >
                    {{ tech }}
                  </span>
                </div>
                <div class="flex gap-2">
                  <button class="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                    <GithubIcon class="w-4 h-4" />
                    Code
                  </button>
                  <button
                    v-if="project.demo"
                    class="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-3 py-2 rounded text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLinkIcon class="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Languages Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">Langues</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div
              v-for="(lang, index) in languages"
              :key="index"
              class="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
            >
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ lang.name }}</h3>
              <p class="text-gray-600 mb-4">{{ lang.level }}</p>
              <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  class="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  :style="{ width: `${lang.percentage}%` }"
                />
              </div>
              <span class="text-lg font-semibold text-gray-900">{{ lang.percentage }}%</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
          <p class="text-xl text-gray-600 mb-12">
            Intéressé par une collaboration ? N'hésitez pas à me contacter.
          </p>

          <div class="grid md:grid-cols-3 gap-8 mb-12">
            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <MailIcon class="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 class="font-semibold text-gray-900 mb-2">Email</h3>
              <p class="text-gray-600">Douaaebh18@gmail.com</p>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <PhoneIcon class="w-8 h-8 mx-auto mb-4 text-green-600" />
              <h3 class="font-semibold text-gray-900 mb-2">Téléphone</h3>
              <p class="text-gray-600">07.81.55.81.92</p>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <MapPinIcon class="w-8 h-8 mx-auto mb-4 text-purple-600" />
              <h3 class="font-semibold text-gray-900 mb-2">Localisation</h3>
              <p class="text-gray-600">Tanger, Maroc</p>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <MailIcon class="w-4 h-4" />
              Envoyer un email
            </button>
            <button class="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <LinkedinIcon class="w-4 h-4" />
              LinkedIn
            </button>
            <button class="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
              <GithubIcon class="w-4 h-4" />
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-400">© 2024 Douae Bouhaja. Tous droits réservés.</p>
        <p class="text-gray-500 mt-2">Développé avec Vue.js et Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Github as GithubIcon,
  ExternalLink as ExternalLinkIcon,
  Code as CodeIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  Download as DownloadIcon,
  Linkedin as LinkedinIcon,
  Calendar as CalendarIcon,
  Award as AwardIcon,
  BookOpen as BookOpenIcon,
  Briefcase as BriefcaseIcon,
  Menu as MenuIcon,
  X as XIcon
} from 'lucide-vue-next'

// Reactive data
const activeSection = ref('home')
const mobileMenuOpen = ref(false)

// Navigation items
const navigation = [
  { id: 'home', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'skills', label: 'Compétences' },
  { id: 'education', label: 'Formation' },
  { id: 'projects', label: 'Projets' },
  { id: 'contact', label: 'Contact' }
]

// About items
const aboutItems = [
  { icon: CodeIcon, title: 'Développement', desc: 'Full-Stack' },
  { icon: DatabaseIcon, title: 'Bases de données', desc: 'MySQL, MongoDB' },
  { icon: GlobeIcon, title: 'Web moderne', desc: 'Vue.js, Laravel' },
  { icon: AwardIcon, title: 'Qualité', desc: 'Code propre' }
]

// Skills categories
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Inertia.js'],
    icon: GlobeIcon,
    color: 'blue'
  },
  {
    title: 'Backend',
    skills: ['PHP', 'Laravel', 'Java', 'JavaFX', 'Python', 'C#'],
    icon: CodeIcon,
    color: 'green'
  },
  {
    title: 'Base de données',
    skills: ['MySQL', 'SQL', 'MongoDB'],
    icon: DatabaseIcon,
    color: 'purple'
  },
  {
    title: 'Outils',
    skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Docker'],
    icon: BriefcaseIcon,
    color: 'orange'
  }
]

// Education data
const education = [
  {
    title: 'Programme ALX - Développement Logiciel',
    institution: 'Holberton School Partnership',
    period: '2024 - Présent',
    type: 'Certification',
    status: 'En cours'
  },
  {
    title: 'Licence Droit Financier et des Affaires',
    institution: 'Université Abd Lmalik Asaadi',
    period: '2023 - Présent',
    type: 'Licence',
    status: 'En cours'
  },
  {
    title: 'Diplôme Technicien Spécialisé',
    institution: 'Miage - Tanger',
    period: '2023 - Présent',
    type: 'Diplôme',
    status: 'En cours'
  },
  {
    title: 'Baccalauréat Lettres Modernes',
    institution: 'Lycée Ibn Khatib',
    period: '2022 - 2023',
    type: 'Diplôme',
    status: 'Obtenu'
  }
]

// Projects data
const projects = [
  {
    title: 'Système de Gestion Hôtelière',
    description: 'Application desktop complète pour la gestion d\'hôtel avec interface moderne, gestion des réservations, facturation automatisée et rapports détaillés.',
    technologies: ['JavaFX', 'MySQL', 'Java', 'CSS'],
    status: 'Terminé',
    category: 'Desktop Application',
    github: 'https://github.com/douae/hotel-management',
    demo: 'https://hotel-demo.douae.dev'
  },
  {
    title: 'Plateforme E-Commerce',
    description: 'Site web e-commerce responsive avec panier d\'achat, système de paiement, gestion des stocks et interface d\'administration complète.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
    status: 'En développement',
    category: 'Web Application',
    github: 'https://github.com/douae/ecommerce-platform',
    demo: 'https://ecommerce.douae.dev'
  },
  {
    title: 'Application de Gestion de Stock',
    description: 'Solution desktop pour la gestion d\'inventaire avec suivi en temps réel, alertes automatiques et génération de rapports.',
    technologies: ['C#', 'WPF', 'SQL Server', '.NET'],
    status: 'Planifié',
    category: 'Desktop Application',
    github: 'https://github.com/douae/inventory-management',
    demo: ''
  }
]

// Languages data
const languages = [
  { name: 'Arabe', level: 'Natif', percentage: 100 },
  { name: 'Français', level: 'Intermédiaire', percentage: 75 },
  { name: 'Anglais', level: 'B2', percentage: 85 }
]

// Methods
const handleScroll = () => {
  const sections = ['home', 'about', 'skills', 'education', 'projects', 'contact']
  const scrollPosition = window.scrollY + 100

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeSection.value = section
        break
      }
    }
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  mobileMenuOpen.value = false
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Custom styles for smooth scrolling and transitions */
.container {
  max-width: 1200px;
}

/* Smooth transitions */
* {
  transition: all 0.3s ease;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
