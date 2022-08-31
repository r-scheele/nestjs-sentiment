// @ts-ignore

import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './create-review.dto';
import aposToLexForm from 'apos-to-lex-form';
import { WordTokenizer } from 'natural';
import SpellCorrector from 'spelling-corrector';
import { removeStopwords } from 'stopword';
import natural from 'natural';

const spellCorrector = new SpellCorrector();
spellCorrector.loadDictionary();

@Injectable()
export class AppService {
  analyzeReview() {


  }
}
