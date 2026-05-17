"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Save, Edit, Trash2, Plus } from "lucide-react"

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const [siteContent, setSiteContent] = useState({
    hero: {
      title: "Building Ethical Business Ecosystems",
      subtitle: "Empowering AJK & GB Through Islamic Values",
      description: "Join a prestigious network of visionary entrepreneurs...",
    },
    about: {
      description: "The Business Forum Azad Jammu & Kashmir & Gilgit Baltistan...",
    },
    contact: {
      phone: "+92-XXX-XXXXXXX",
      email: "info@bfajkgb.org",
      address: "Muzaffarabad, Azad Jammu & Kashmir",
    },
  })

  const [news, setNews] = useState([
    {
      id: 1,
      title: "BFAJK&GB Launches Digital Economy Initiative",
      excerpt: "New program aims to connect local tech talent...",
      date: "March 15, 2024",
      category: "Technology",
    },
    {
      id: 2,
      title: "Tourism Infrastructure Development Summit",
      excerpt: "Forum brings together stakeholders...",
      date: "March 10, 2024",
      category: "Tourism",
    },
  ])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple authentication - in production use proper auth
    if (credentials.username === "admin" && credentials.password === "bfajk2024") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid credentials")
    }
  }

  const handleSaveContent = () => {
    // In a real app, this would save to database
    localStorage.setItem("siteContent", JSON.stringify(siteContent))
    alert("Content saved successfully!")
  }

  const handleAddNews = () => {
    const newArticle = {
      id: news.length + 1,
      title: "New Article",
      excerpt: "Article excerpt...",
      date: new Date().toLocaleDateString(),
      category: "General",
    }
    setNews([...news, newArticle])
  }

  const handleDeleteNews = (id: number) => {
    setNews(news.filter((article) => article.id !== id))
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="text"
                placeholder="Username"
                value={credentials.username}
                onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-blue-500">
                Login
              </Button>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">Demo credentials: admin / bfajk2024</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
          <Button onClick={() => setIsAuthenticated(false)} variant="outline">
            Logout
          </Button>
        </div>

        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="content">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="w-5 h-5" />
                    Hero Section
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Hero Title"
                    value={siteContent.hero.title}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        hero: { ...siteContent.hero, title: e.target.value },
                      })
                    }
                  />
                  <Input
                    placeholder="Hero Subtitle"
                    value={siteContent.hero.subtitle}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        hero: { ...siteContent.hero, subtitle: e.target.value },
                      })
                    }
                  />
                  <Textarea
                    placeholder="Hero Description"
                    value={siteContent.hero.description}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        hero: { ...siteContent.hero, description: e.target.value },
                      })
                    }
                    rows={3}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Phone Number"
                    value={siteContent.contact.phone}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        contact: { ...siteContent.contact, phone: e.target.value },
                      })
                    }
                  />
                  <Input
                    placeholder="Email Address"
                    value={siteContent.contact.email}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        contact: { ...siteContent.contact, email: e.target.value },
                      })
                    }
                  />
                  <Input
                    placeholder="Address"
                    value={siteContent.contact.address}
                    onChange={(e) =>
                      setSiteContent({
                        ...siteContent,
                        contact: { ...siteContent.contact, address: e.target.value },
                      })
                    }
                  />
                </CardContent>
              </Card>

              <Button onClick={handleSaveContent} className="bg-gradient-to-r from-emerald-500 to-blue-500">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="news">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>News Management</CardTitle>
                  <Button onClick={handleAddNews} size="sm">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Article
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {news.map((article) => (
                    <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-semibold">{article.title}</h3>
                        <p className="text-sm text-gray-600">{article.excerpt}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="outline">{article.category}</Badge>
                          <span className="text-xs text-gray-500">{article.date}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeleteNews(article.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">User management features coming soon...</div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Site Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-gray-500">Site settings panel coming soon...</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
