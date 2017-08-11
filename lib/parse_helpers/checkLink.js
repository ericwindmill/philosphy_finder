export default function checkLink ($, $link) {
  let url = $link[0].attribs.href

  // first, check for parenthesis.
  let parent = $link.parent('p')
  let parentText = parent.text()
  let openingParen = parentText.indexOf('(')
  let closingParen = parentText.indexOf(')')
  let linkIndexInParent = parentText.indexOf($link.text())
  if (openingParen !== -1 &&
      closingParen !== -1 &&
      (linkIndexInParent > openingParen && linkIndexInParent < closingParen)) {
    return false
  }

  // next, make sure the link is going to a wikipage
  const goodLink = (
      url.includes('wiki') &&
      !url.includes('Help:') &&
      !url.includes('File') &&
      !url.includes('Wikipedia') &&
      !url.includes('wiktionary') 
    )

  return goodLink
}