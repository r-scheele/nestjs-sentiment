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
  analyzeReview(analysis: CreateReviewDto) {
    const formattedReview: string = aposToLexForm(analysis.review)
      .toLowerCase()
      .replace(/[^a-zA-Z\s]+/g, '');

    const tokenizer = new WordTokenizer();
    const tokens = tokenizer.tokenize(formattedReview);

    const fixedSpelling = tokens.map((word) => spellCorrector.correct(word));

    const stopWordsRemoved = removeStopwords(fixedSpelling);

    const { SentimentAnalyzer, PorterStemmer } = natural;
    const analyzer = new SentimentAnalyzer('English', PorterStemmer, 'afinn');
    const sentiment = analyzer.getSentiment(stopWordsRemoved);


    return sentiment;

  }
}
