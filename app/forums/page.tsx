"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Users, TrendingUp, Plus, Search } from "lucide-react"

export default function ForumsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showNewTopicForm, setShowNewTopicForm] = useState(false)
  const [newTopic, setNewTopic] = useState({ title: "", content: "", category: "general" })

  const categories = [
    { id: "all", name: "All Topics", count: 156 },
    { id: "tourism", name: "Tourism & Hospitality", count: 34 },
    { id: "tech", name: "IT & Digital Economy", count: 42 },
    { id: "mining", name: "Mining & Resources", count: 28 },
    { id: "development", name: "Urban Development", count: 31 },
    { id: "manufacturing", name: "Manufacturing", count: 21 },
  ]

  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Digital Payment Solutions for Small Businesses",
      author: "Ahmad Khan",
      category: "tech",
      replies: 23,
      views: 456,
      lastActivity: "2 hours ago",
      isPinned: true,
      content: "Discussing the implementation of digital payment solutions for small businesses in AJK...",
    },
    {
      id: 2,
      title: "Sustainable Tourism Development in Northern Areas",
      author: "Fatima Ali",
      category: "tourism",
      replies: 18,
      views: 342,
      lastActivity: "4 hours ago",
      isPinned: false,
      content: "How can we develop sustainable tourism while preserving our natural heritage?",
    },
    {
      id: 3,
      title: "Mineral Resource Management Best Practices",
      author: "Dr. Hassan Shah",
      category: "mining",
      replies: 31,
      views: 678,
      lastActivity: "1 day ago",
      isPinned: false,
      content: "Exploring best practices for responsible mineral extraction and processing...",
    },
    {
      id: 4,
      title: "Smart City Planning for Muzaffarabad",
      author: "Eng. Saira Ahmed",
      category: "development",
      replies: 15,
      views: 289,
      lastActivity: "2 days ago",
      isPinned: false,
      content: "Discussing smart city initiatives and urban planning strategies...",
    },
  ])

  const filteredTopics =
    selectedCategory === "all" ? topics : topics.filter((topic) => topic.category === selectedCategory)

  const handleNewTopic = () => {
    if (newTopic.title && newTopic.content) {
      const topic = {
        id: topics.length + 1,
        title: newTopic.title,
        author: "Current User",
        category: newTopic.category,
        replies: 0,
        views: 0,
        lastActivity: "Just now",
        isPinned: false,
        content: newTopic.content,
      }
      setTopics([topic, ...topics])
      setNewTopic({ title: "", content: "", category: "general" })
      setShowNewTopicForm(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Business Forums</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Connect, discuss, and collaborate with fellow business professionals
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </button>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Forum Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">1,247</div>
                  <div className="text-sm text-gray-600">Total Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">156</div>
                  <div className="text-sm text-gray-600">Active Topics</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">2,834</div>
                  <div className="text-sm text-gray-600">Total Posts</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search topics..." className="pl-10 border-0 bg-white/80 backdrop-blur-sm" />
              </div>
              <Button
                onClick={() => setShowNewTopicForm(!showNewTopicForm)}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Topic
              </Button>
            </div>

            {/* New Topic Form */}
            {showNewTopicForm && (
              <Card className="mb-6 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Create New Topic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Topic title..."
                    value={newTopic.title}
                    onChange={(e) => setNewTopic({ ...newTopic, title: e.target.value })}
                  />
                  <select
                    value={newTopic.category}
                    onChange={(e) => setNewTopic({ ...newTopic, category: e.target.value })}
                    className="w-full p-2 border rounded-lg"
                  >
                    <option value="general">General Discussion</option>
                    <option value="tourism">Tourism & Hospitality</option>
                    <option value="tech">IT & Digital Economy</option>
                    <option value="mining">Mining & Resources</option>
                    <option value="development">Urban Development</option>
                    <option value="manufacturing">Manufacturing</option>
                  </select>
                  <Textarea
                    placeholder="Write your topic content..."
                    value={newTopic.content}
                    onChange={(e) => setNewTopic({ ...newTopic, content: e.target.value })}
                    rows={4}
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleNewTopic} className="bg-gradient-to-r from-emerald-500 to-blue-500">
                      Post Topic
                    </Button>
                    <Button variant="outline" onClick={() => setShowNewTopicForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Topics List */}
            <div className="space-y-4">
              {filteredTopics.map((topic) => (
                <Card
                  key={topic.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                        <AvatarFallback>
                          {topic.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {topic.isPinned && <Badge className="bg-yellow-100 text-yellow-800">Pinned</Badge>}
                          <Badge variant="outline">
                            {categories.find((c) => c.id === topic.category)?.name || "General"}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                          {topic.title}
                        </h3>

                        <p className="text-gray-600 mb-3 line-clamp-2">{topic.content}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-4">
                            <span>By {topic.author}</span>
                            <span>{topic.lastActivity}</span>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" />
                              <span>{topic.replies}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span>{topic.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
