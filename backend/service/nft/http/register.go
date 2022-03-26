package http

import "github.com/gin-gonic/gin"

func RegisterRoutes(router *gin.Engine, server *Server) {
	router.GET("/nft", server.GetNFTs)
}
