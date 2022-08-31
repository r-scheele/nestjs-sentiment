import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateReviewDto } from './create-review.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @HttpCode(200)
  @Post()
  analyzeReview(@Body() analysis: CreateReviewDto) {
    return this.appService.analyzeReview(analysis);
  }
}
