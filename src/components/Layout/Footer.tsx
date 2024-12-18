import { Github } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()}. All rights reserved.</p>
        <a href="https://github.com/sana-gaikwad" target="_blank" className="text-gray-600 hover:text-gray-900">
          <Github className="h-5 w-5" />
        </a>
      </div>
    </footer>
  )
}
